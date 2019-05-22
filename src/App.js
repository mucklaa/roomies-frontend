import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Profile from "./pages/Profile"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ToDo from "./pages/ToDo";
import Shopping from "./pages/Shopping";
import Chat from "./pages/Chat";
import Bill from "./pages/Bill";





import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/" component={Login} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <AnonRoute exact path="/private" component={Private} />
            <AnonRoute exact path="/profile" component={Profile} />
            <AnonRoute exact path="/to-do" component={ToDo} />
            <AnonRoute exact path="/shopping" component={Shopping} />
            <AnonRoute exact path="/chat" component={Chat} />
            <AnonRoute exact path="/bills" component={Bill} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
