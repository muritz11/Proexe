import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditUser from "./components/EditUser";
import NewUser from "./components/NewUser";
import { setUsers } from "./redux/actions/userActions";
import UsersApi from "./api/userRequests";
import { setErrMsg, setSuccessMsg } from "./redux/actions/successAction";


function App() {

  const successMsg = useSelector((state) => state.successMsg)
  const dispatch = useDispatch()
  const errMsg = useSelector((state) => state.errMsg)
  const [processing, setProcessing] = useState(false);
  const usersApi = new UsersApi()

  useEffect(() => {
    setProcessing(true)
    usersApi.getAllUsers()
      .then((resp) => {
        if (resp.status === 200) {
          setProcessing(false)
          dispatch(setUsers(resp.data));
        }
      })
      .catch((err) => {
        console.log("Fetch err:", err);
        setProcessing(false)
        dispatch(setErrMsg('Sorry, an error occured. Could not fetch users'))
        setTimeout(() => {
          dispatch(setErrMsg(''))
        }, 5000);
      })
  }, [dispatch]);


  useEffect(() => {
    setTimeout(() => {
      dispatch(setSuccessMsg(''))
    }, 10000);
  }, [successMsg, dispatch])

  return (
    <main className="p-md-5 p-4 py-5">
      <Router>
        <h1>
          Dashboard
          { processing ? <span className="spinner-border spinner-grow-sm ms-3 text-muted"></span> : '' }  
        </h1>
        { successMsg ? <div className="alert alert-success">{successMsg}</div> : '' }
        { errMsg && <div className="alert alert-danger">{errMsg}</div> }
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/home' component={Dashboard} />
          <Route path='/new-user' component={NewUser} />
          <Route path='/edit-user/:uid' component={EditUser} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
