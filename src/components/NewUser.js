import UsersApi from '../api/userRequests';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setErrMsg, setSuccessMsg } from '../redux/actions/successAction';
import { addUser } from '../redux/actions/userActions';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

const NewUser = () => {

    const hist = useHistory()
    const users = useSelector((state) => state.allUsers.users)
    const errMsg = useSelector((state) => state.errMsg)
    const dispatch = useDispatch()
    const usersApi = new UsersApi()
    const [formErr, setFormErr] = useState({})
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        city: '',
    })

    const handleInputs = (e) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }
    
    const handleSubmit = (e) => {
        const valObj = validate(formData)
        setFormErr(valObj)
        e.preventDefault()

        if (Object.keys(valObj).length === 0) {
            setProcessing(true)

            usersApi.createUser(formData)
                .then((resp) => {
                    if (resp.data) {
                        const newUser = {
                            id: users.length+1,
                            name: resp.data.params.name,
                            email: resp.data.params.email,
                            username: resp.data.params.username,
                            address: {city: resp.data.params.city},
                            fake: true
                        }
                        console.log(resp.data)
                        dispatch(addUser(newUser))
                        dispatch(setSuccessMsg('User created successfully'))
                        setProcessing(false)
                        hist.push('/home')
                    }
                }, (err) => {
                    console.log(err);
                    setProcessing(false)
                    dispatch(setErrMsg('Sorry, an error occured'))
                    setTimeout(() => {
                        dispatch(setErrMsg(''))
                    }, 5000);
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

        if (!datas.username) {
            errors.username = 'Username is required!'
        } else if (/\s/.test(datas.username)) {
            errors.username = 'Whitespace is not allowed!'
        }

        return errors
    }

    return (
        <section className='mt-4 form-w br-12 m-auto shad p-4'>
            { errMsg && <div className="alert alert-danger">{errMsg}</div> }
            <div className="mb-4">
                <h3>Add new user</h3>
            </div>
            <form onSubmit={handleSubmit} className='mx-md-5 m-auto'>
                <div className="form-group mb-4">
                    <label htmlFor="name" className='mb-1'>Name</label>
                    <input type="text" id='name' className={formErr.name ? 'form-control border-danger' : 'form-control'} value={formData.name} onChange={handleInputs} />
                    <p className='text-danger'>{ formErr.name }</p>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="email" className='mb-2'>Email</label>
                    <input type="text" id='email' className={formErr.email ? 'form-control border-danger' : 'form-control'} value={formData.email} onChange={handleInputs} />
                    <p className='text-danger'>{ formErr.email }</p>
                </div>
                <div className="form-group mb-4">
                    <div>
                        <label htmlFor="username" className='mb-2'>Username</label>
                        <input type="text" id='username' className={formErr.username ? 'form-control border-danger' : 'form-control'} value={formData.username} onChange={handleInputs} />
                        <p className='text-danger'>{ formErr.username }</p>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div>
                        <label htmlFor="username" className='mb-2'>City</label>
                        <input type="text" id='city' className={formErr.city ? 'form-control border-danger' : 'form-control'} value={formData.city} onChange={handleInputs} />
                        <p className='text-danger'>{ formErr.city }</p>
                    </div>
                </div>
                <div className='text-end'>
                    <Link to='/home' className='btn btn-outline-secondary me-3'>Cancel</Link>
                    <button className='btn btn-success'>
                        { processing ? <span className="spinner-border"></span> : 'Submit' }
                    </button>
                </div>
            </form>
        </section>
      );
};

export default NewUser;
