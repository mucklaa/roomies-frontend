import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import './css/App.css';
import Profile from "./pages/Profile"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ToDo from "./pages/ToDo";
import Shopping from "./pages/Shopping";
import Chat from "./pages/Chat";
import Bill from "./pages/Bill";
import ErrorPage from "./pages/Error"
import BillDetail from "./pages/BillDetail";
import BillOverview from "./pages/BillOverview";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
      <div className="container">
          {/* <Navbar /> */}
          <Switch>
            <AnonRoute exact path="/" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/to-do" component={ToDo} />
            <PrivateRoute exact path="/shopping" component={Shopping} />
            <PrivateRoute exact path="/chat" component={Chat} />
            <PrivateRoute exact path="/bills" component={Bill} />
            <PrivateRoute exact path="/bills/detail" component={BillDetail} />            
            <PrivateRoute exact path="/bills/overview" component={BillOverview} />
            <Route path="/*" component={ErrorPage}/>
          </Switch>
          </div>
      </AuthProvider>
    );
  }
}

export default App;
