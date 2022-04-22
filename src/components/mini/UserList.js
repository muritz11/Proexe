import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteUser, selectUser } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import UsersApi from "../../api/userRequests";
import { setErrMsg, setSuccessMsg } from '../../redux/actions/successAction';


const UserList = () => {

    const users = useSelector((state) => state.allUsers.users)
    const selUser = useSelector((state) => state.selectedUser)
    const [ deleteModal, setDeleteModal ] = useState(false)
    const [processing, setProcessing] = useState(false);
    const dispatch = useDispatch()
    const usersApi = new UsersApi()

    const deleteModalHandler = () => {
        setDeleteModal(!deleteModal)
    }

    const delUser = () => {
        setProcessing(true)
        let uid
        if (selUser.fake) {
            uid = 1
        } else {
            uid = selUser.id
        }
        usersApi.deleteUser(uid)
            .then((resp) => {
                if (resp.status === 200) {
                    dispatch(deleteUser(selUser.id))
                    setProcessing(false)
                    deleteModalHandler()
                    dispatch(setSuccessMsg('User Deleted'))
                    setTimeout(() => {
                        dispatch(setSuccessMsg(''))
                    }, 3000);
                }
            }).catch((err) => {
                setProcessing(false)
                deleteModalHandler()
                dispatch(setErrMsg('Sorry, an error occured'))
                setTimeout(() => {
                    dispatch(setErrMsg(''))
                }, 3000);
                console.log("Delete Error:", err);
            })
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
                <td onClick={() => {dispatch(selectUser(user))}}>
                    <Link to={"/edit-user/"+id} className="btn btn-warning text-white"> Edit</Link>
                </td>
                <td onClick={() => {dispatch(selectUser(user))}}>
                    <button onClick={deleteModalHandler} className="btn btn-danger">Delete</button>
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
                            <button type="button" className="btn btn-danger w-25" onClick={delUser}>
                                { processing ? <span className="spinner-border spinner-grow-sm"></span> : 'DELETE' }
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
            : '' }

            {/* table */}
            <div className="table-responsive shadow m-2 mx-3 card pb-5">
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
                        { users.length !== 0 ? renderList : <tr><td>We have no users yet</td></tr> }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default UserList;
