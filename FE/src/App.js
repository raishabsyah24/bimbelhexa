import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Header from './Component/Header';
import Register from './Pages/Register';
import Promo from './Pages/Promo';
import Beasiswa from './Pages/Beasiswa';

export default class App extends Component {
  render() {
    if (localStorage.getItem("token") != null) {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Header />
            <Switch>
            <Route path="/beasiswa">
                <Beasiswa/>
              </Route>
            <Route path="/promo">
                <Promo/>
              </Route>
            <Route path="/register">
                <Register/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Header />
            <Switch>
            <Route path="/beasiswa">
                <Beasiswa/>
              </Route>
            <Route path="/promo">
                <Promo/>
              </Route>
            <Route path="/register">
                <Register/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}