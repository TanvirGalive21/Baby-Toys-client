import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import LoginSignUp from './Pages/Login/Login/LoginSignUp';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
// import Navigation from './Pages/Shared/Navigation/Navigation'
import Products from './Pages/Home/Products/Products';
import Banner from './Pages/Home/Banner/Banner';
import Order from './UserDashboard/Order';
import PrivateRoute from './Pages/Route/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import NotFound from './Pages/Shared/NotFound'
import Contact from './Pages/Home/Contact/Contact';

function App() {
 
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/order"> <Order></Order></PrivateRoute>
          <PrivateRoute  path="/dashboard"> <Dashboard></Dashboard></PrivateRoute>
          <Route exact path="/"> <Home></Home></Route>
          <Route exact path="/home"> <Home></Home></Route>
          <Route exact path="/banner"> <Banner></Banner></Route>
          <Route exact path="/products"> <Products></Products></Route>
          <Route exact path="/explore"> <Explore></Explore></Route>
          <Route exact path="/contact"> <Contact></Contact> </Route>
          <Route exact path='/login'><LoginSignUp></LoginSignUp> </Route>
          <Route exact path='/signup'><LoginSignUp></LoginSignUp> </Route>
          <Route path="*"> <NotFound></NotFound> </Route>
        </Switch>
      </Router>
    </AuthProvider>
                                             
  );
}

export default App;
