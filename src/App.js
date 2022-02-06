import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditUser from "./components/EditUser";
import NewUser from "./components/NewUser";


function App() {

  const successMsg = useSelector((state) => state.successMsg)

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
        </Switch>
      </Router>
    </main>
  );
}

export default App;
