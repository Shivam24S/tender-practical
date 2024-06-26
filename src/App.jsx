import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./component/Register";
import Users from "./components/Users";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
        <Route path="/update-user/:id" component={UpdateUser} />
        <Route path="/delete-user/:id" component={DeleteUser} />
      </Switch>
    </Router>
  );
};

export default App;
