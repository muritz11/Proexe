import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const UserList = () => {

    const users = useSelector((state) => state.allUsers.users)
    const [ deleteModal, setDeleteModal ] = useState(false)

    const deleteModalHandler = () => {
        setDeleteModal(!deleteModal)
    }

    window.onclick = function(event) {

        const modal = document.querySelector("#modal")

        if (event.target === modal) {
            setDeleteModal(false)
        }
    }

    const renderList = users.map((user, index) => {
        const { id, name, email, username, address } = user

        return (
            <tr key={index} className="p-relative">
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address.city}</td>
                <td>
                    <Link to={"/edit-user/"+id} className="btn btn-warning text-white"> Edit</Link>
                </td>
                <td onClick={deleteModalHandler}>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <section>
            {/* delete modal */}
            { deleteModal ? 
            <div className="modal d-block" id="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content pull-up text-center">

                        <h5 className="text-start p-2 pb-0">DELETE</h5>
                        <hr className='my-1' />
                        <div className="pb-3 px-5">
                            <h5 className='mt-3'>Are you sure?</h5>
                            <p className='mt-3'>You can't undo this action</p>
                        </div>
                        <hr className='my-1' />
                        <div className="p-3 text-end">
                            <button type="button" className="btn btn-secondary me-3" onClick={deleteModalHandler}>CANCEL</button>
                            <button type="button" className="btn btn-danger w-25">DELETE</button>
                        </div>
                    </div>
                </div>
            </div> 
            : '' }

            <div className="table-responsive m-2 card pb-5">
                <table className="table text-center">
                    <thead>
                        <tr className="grey-bg">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {renderList}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default UserList;
