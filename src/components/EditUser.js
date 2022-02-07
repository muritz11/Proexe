import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { removeSelectedUser, updateUser } from '../redux/actions/userActions';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSuccessMsg } from '../redux/actions/successAction';

const EditUser = () => {

    const user = useSelector((state) => state.selectedUser)
    const { uid } = useParams()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [formErr, setFormErr] = useState({})
    const [processing, setProcessing] = useState(false);
    const hist = useHistory()

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
            const url = `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${uid}`
            axios.put(url, {name: name, username: userName, email: email, address: {city: city}})
                .then((resp) => {
                    if (resp.data) {
                        console.log(resp.data);
                        dispatch(updateUser({index: uid-1, data: resp.data}))
                        dispatch(setSuccessMsg('User updated successfully'))
                        setProcessing(false)
                        hist.push('/home')
                    }
                }, (err) => {
                    console.log(err);
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
            <section className='mt-4 card'>
                <div className="p-2 pb-1">
                    <h3>Edit Form: {user.name}</h3>
                </div>
                <hr />
                <form onSubmit={handleSubmit} className='ms-5 me-2
                p-4'>
                    <div className="form-group row mb-4">
                        <div className="col-4">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id='name' className='form-control' value={name} onChange={(e) => {setName(e.target.value)}} />
                            <p className='text-danger'>{ formErr.name }</p>

                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <div className="col-4">
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id='username' className='form-control' value={userName} onChange={(e) => {setUserName(e.target.value)}} />
                            <p className='text-danger'>{ formErr.username }</p>

                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <div className="col-4">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col-8">
                            <input type="email" id='email' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            <p className='text-danger'>{ formErr.email }</p>

                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <div className="col-4">
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id='city' className='form-control' value={city} onChange={(e) => {setCity(e.target.value)}} />

                        </div>
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
