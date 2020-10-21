import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./js/components/ProtectedRoute";
import Home from "./js/components/Home";
import Login from "./js/components/Login";
import Dashboard from "./js/components/admin-components/Dashboard";
import Occasions from "./js/components/Occasions";
import About from "./js/components/About";
import OccasionsCRUD from "./js/components/admin-components/Occasions";
import Profile from "./js/components/admin-components/Profile";
import addOccasion from "./js/components/addOccasion";
import EditOccasion from "./js/components/EditOccasion";
import Occasion from "./js/components/Occasion";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/admin"
        component={Dashboard}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute 
      exact
      path="/admin/occasions"
      component={OccasionsCRUD}
      isAuthenticated={isAuthenticated}
      isVerifying={isVerifying}
      />
      <ProtectedRoute
      path="/admin/occasions/add"
      component={addOccasion} 
      isAuthenticated={isAuthenticated} 
      isVerifying={isVerifying}/>
     
      <ProtectedRoute 
      path="/admin/occasions/:id" component={EditOccasion} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>

      <ProtectedRoute
      exact path="/admin/profile"
      component={Profile}
      isAuthenticated={isAuthenticated}
      isVerifying={isVerifying}
      />
      
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/occasions" component={Occasions} />
      <Route  path="/occasion/:id" component={Occasion}/>
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);