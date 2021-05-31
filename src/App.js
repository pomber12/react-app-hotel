
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import {Link} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login"
import { AuthProvider } from "./contexts/AuthContext"
import DashBoard from "./components/DashBoard"
import PrivateRoute from "./components/PrivateRoute"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar";




function App() {
  return (
   
    
    <>

    
    <Router>
    <Navbar />
    <AuthProvider>
    <Switch>
    

    <Route exact path="/" component={Home}/>

    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route exact path="/Signup" component={Signup} />
    <Route exact path="/Login" component={Login} />

    <PrivateRoute exact path="/DashBoard" component={DashBoard} />
    
     
   <Route component={Error}/>


    </Switch>
    </AuthProvider>

    </Router>
  
  </>

 
  );
}

export default App;