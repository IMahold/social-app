import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/LoginForm";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/home" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route component={Unknown} />
    </Switch>
  );
}

function Unknown(){
  return <div>Error 404 | Page not found!</div>
}

export default App;
