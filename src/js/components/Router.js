import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./admin-components/Dashboard";
import Occasions from "./Occasions";
import About from "./About";
import OccasionsCRUD from "./admin-components/Occasions";
import Profile from "./admin-components/Profile";
import addOccasion from "./addOccasion";
import EditOccasion from "./EditOccasion";
import Occasion from "./Occasion";

const Router = (props) => {
    const { isAuthenticated, isVerifying } = props;
 return (
   <BrowserRouter>
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
  </BrowserRouter>
    );
}

function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isVerifying: state.auth.isVerifying
    };
  }

  export default connect(mapStateToProps)(Router);