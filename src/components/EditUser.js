import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UsersApi from "../api/userRequests";
import { useParams, Link } from 'react-router-dom';
import { removeSelectedUser, updateUser } from '../redux/actions/userActions';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setErrMsg, setSuccessMsg } from '../redux/actions/successAction';

const EditUser = () => {

    const user = useSelector((state) => state.selectedUser)
    const errMsg = useSelector((state) => state.errMsg)
    const { uid } = useParams()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [formErr, setFormErr] = useState({})
    const [processing, setProcessing] = useState(false);
    const hist = useHistory()
    const usersApi = new UsersApi()

    if (Object.keys(user).length === 0) {
        hist.push('/home')
    }
    
    useEffect(() => {
        setName(user.name)
        setUserName(user.username)
        setEmail(user.email)
        setCity(user.address.city)
        return () => {
            dispatch(removeSelectedUser())
        }
    }, [uid, dispatch, user]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const valObj = validate({name: name, username: userName, email: email, city: city})
        setFormErr(valObj)


        if (Object.keys(valObj).length === 0) {
            setProcessing(true)
            let fetchId
            if (user.fake) {
                fetchId = 1
            } else {
                fetchId = uid                
            }
            usersApi.updateUser(fetchId, {name: name, username: userName, email: email, address: {city: city}})
                .then((resp) => {
                    if (resp.data) {
                        dispatch(updateUser({index: user.id, data: {id: user.id, name: name, username: userName, email: email, address: {city: city}}}))
                        console.log(resp.data)
                        dispatch(setSuccessMsg('User updated successfully'))
                        setProcessing(false)
                        hist.push('/home')
                    }
                }, (err) => {
                    console.log(err.response);
                    dispatch(setErrMsg('Sorry, an error occured'))
                    dispatch(setErrMsg(''))
                    setProcessing(false)
                })
        }
    }

    const validate = (datas) => {
        const errors = {}
        if (!datas.name) {
            errors.name = 'Name is required!'
        } else if (!/^[a-zA-Z-' ]*$/.test(datas.name)) {
            errors.name = 'Only letters and white space allowed!'
        }

        if (!datas.email) {
            errors.email = 'Email is required!'
        } else if (!/^\S+@\S+\.\S+$/.test(datas.email)) {
            errors.email = 'Email is not valid!'
        }
        
        if (/\s/.test(datas.username)) {
            errors.username = 'Username cannot contain whitespaces!'
        }

        return errors
    }


    return (
        <>
            {Object.keys(user).length === 0 ? 
            <div>Loading...</div>
            :
            <section className='mt-4 form-w br-12 m-auto shad p-4'>
                { errMsg && <div className="alert alert-danger">{errMsg}</div> }
                <div className="p-2 pb-1">
                    <h3>Update user</h3>
                </div>
                <form onSubmit={handleSubmit} className='mx-md-5 m-auto'>
                    <div className="form-group mb-4">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' className={formErr.name ? 'form-control border-danger' : 'form-control'} value={name} onChange={(e) => {setName(e.target.value)}} />
                        <p className='text-danger'>{ formErr.name }</p>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' className={formErr.username ? 'form-control border-danger' : 'form-control'} value={userName} onChange={(e) => {setUserName(e.target.value)}} />
                        <p className='text-danger'>{ formErr.username }</p>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' className={formErr.email ? 'form-control border-danger' : 'form-control'} value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <p className='text-danger'>{ formErr.email }</p>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="city">City</label>
                        <input type="text" id='city' className='form-control' value={city} onChange={(e) => {setCity(e.target.value)}} />
                    </div>

                    <div className='text-end'>
                        <Link to='/home' className='btn btn-outline-secondary me-3'>Cancel</Link>
                        <button className='btn btn-success'>
                        { processing ? <span className="spinner-border spinner-grow-sm"></span> : 'Update' }
                        </button>
                    </div>
                </form>
                </section>
            }
        </>
      );
};

export default EditUser;
