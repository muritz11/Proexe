import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {

    const { uid } = useParams()
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

    return (
        <section className='mt-4 card'>
            <div className="p-2 pb-1">
                <h3>Edit Form: {uid}</h3>
            </div>
            <hr />
            <form action="" className='ms-5 me-2
            p-4'>
                <div className="form-group row mb-4">
                    <div className="col-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" id='name' className='form-control' value={name} onChange={(e) => {setName(e.target.value)}} />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <div className="col-4">
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="col-8">
                        <input type="text" id='username' className='form-control' value={userName} onChange={(e) => {setUserName(e.target.value)}} />
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <div className="col-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-8">
                        <input type="email" id='email' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}} />
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
                    <button className='btn btn-outline-secondary me-3'>Cancel</button>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </form>
        </section>
      );
};

export default EditUser;
