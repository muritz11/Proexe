import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditUser from "./components/EditUser";
import NewUser from "./components/NewUser";
import { setUsers } from "./redux/actions/userActions";
import axios from "axios";
import { setErrMsg, setSuccessMsg } from "./redux/actions/successAction";


function App() {

  const successMsg = useSelector((state) => state.successMsg)
  const dispatch = useDispatch()
  const errMsg = useSelector((state) => state.errMsg)

  // const fetchUsers = async () => {
  //   const resp = await 
  // }

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data")
      .then((resp) => {
        if (resp.status === 200) {
          dispatch(setUsers(resp.data));
        } else {
          dispatch(setErrMsg('Sorry, an error occured.'))
        }
      })
      .catch((err) => {
        console.log("Fetch err:", err);
        dispatch(setErrMsg('Sorry, an error occured. Could not fetch users'))
        setTimeout(() => {
          dispatch(setErrMsg(''))
        }, 5000);
      })
  }, [dispatch]);


  useEffect(() => {
    setTimeout(() => {
      dispatch(setSuccessMsg(''))
    }, 3000);
  }, [successMsg, dispatch])

  return (
    <main className="p-md-5 p-4 py-5">
      <Router>
        <h1>Dashboard</h1>
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
