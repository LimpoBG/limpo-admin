import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PlaceOrderPage from './pages/PlaceOrderPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div>Login</div>
        </Route>
        <Route path="/dashboard">
          <div>Dashboard</div>
        </Route>
        <Route path="/place-order">
          <PlaceOrderPage/>
        </Route>
        <Route path="/*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
