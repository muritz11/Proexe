import axios from 'axios';
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
    const errMsg = useSelector((state) => state.errMsg)
    const dispatch = useDispatch()
    const [formErr, setFormErr] = useState({})
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
            const url = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"

            axios.post(url, formData)
                .then((resp) => {
                    if (resp.data) {
                        const newUser = {
                            id: resp.data.id,
                            name: resp.data.name,
                            email: resp.data.email,
                            username: '',
                            address: {city: ''},
                        }
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

        return errors
    }

    return (
        <section className='mt-4 card'>
            { errMsg && <div className="alert alert-danger">{errMsg}</div> }
            <div className="p-2 pb-1">
                <h3>Form</h3>
            </div>
            <hr />
            <form onSubmit={handleSubmit} className='ms-5 me-2
            p-4'>
                <div className="form-group row mb-4">
                    <div className="col-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" id='name' className={formErr.name ? 'form-control border-danger' : 'form-control'} value={formData.name} onChange={handleInputs} />
                        <p className='text-danger'>{ formErr.name }</p>
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <div className="col-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-8">
                        <input type="text" id='email' className={formErr.email ? 'form-control border-danger' : 'form-control'} value={formData.email} onChange={handleInputs} />
                        <p className='text-danger'>{ formErr.email }</p>
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
