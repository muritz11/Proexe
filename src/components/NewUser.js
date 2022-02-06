import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { setSuccessMsg } from '../redux/actions/successAction';
import { setUsers } from '../redux/actions/userActions';

const NewUser = () => {

    const [formErr, setFormErr] = useState({})
    const successMsg  = useSelector((state) => state.successMsg)
    const dispatch = useDispatch()
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
            const url = "http://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"

            axios.post(url, formData)
            .then((resp) => {
                if (resp.data) {
                    dispatch(setSuccessMsg('User Created'))
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

        return errors
    }

    return (
        <section className='mt-4 card'>
            { successMsg ? <Redirect to="/home"></Redirect> : '' }
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
                        <input type="text" id='name' className='form-control' value={formData.name} onChange={handleInputs} />
                        <p className='text-danger'>{ formErr.name }</p>
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <div className="col-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-8">
                        <input type="text" id='email' className='form-control' value={formData.email} onChange={handleInputs} />
                        <p className='text-danger'>{ formErr.email }</p>
                    </div>
                </div>
                <div className='text-end'>
                    <button className='btn btn-outline-secondary me-3'>Cancel</button>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </form>
        </section>
      );
};

export default NewUser;
