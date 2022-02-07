import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditUser from "./components/EditUser";
import NewUser from "./components/NewUser";
import { setUsers } from "./redux/actions/userActions";
import axios from "axios";
import { setSuccessMsg } from "./redux/actions/successAction";


function App() {

  const successMsg = useSelector((state) => state.successMsg)
  const dispatch = useDispatch()

  const fetchUsers = async () => {
    const resp = await axios.get("http://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data").catch((err) => {
        console.log("Fetch err:", err);
    })
    dispatch(setUsers(resp.data));
  }

useEffect(() => {
    fetchUsers()
}, []);


  useEffect(() => {
    setTimeout(() => {
      dispatch(setSuccessMsg(''))
    }, 3000);
  }, [successMsg, dispatch])

  return (
    <main className="p-5">
      <Router>
        <h1>Dashboard</h1>
        { successMsg ? <div className="alert alert-success">{successMsg}</div> : '' }
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
