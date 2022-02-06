import React from 'react';
import { Link } from "react-router-dom";
import UsersList from "./mini/UserList";

const Dashboard = () => {
  return (
    <section className='mt-4 card'>
        <div className="row p-2 pb-1">
            <div className="col-6">
                <h3>User List</h3>
            </div>
            <div className="col-6 text-end">
                <Link to='/new-user' className='btn btn-primary'>Add new</Link>
            </div>
        </div>
        <hr />
        <UsersList />
    </section>
  );
};

export default Dashboard;
