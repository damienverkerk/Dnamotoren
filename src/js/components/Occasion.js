import React, {Component} from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import Navigation from "./Navigation";
import getVisibleOccasions from '../selectors/occasions';

const Occasion = ({occasion}) => {
    console.log(occasion);
    return (
        <div>
            <Navigation />
    <h1>{occasion.title}</h1>
    <h1>{occasion.brand}</h1>
    <h1>{occasion.description}</h1> 
    <h1>{occasion.manufacture_date}</h1> </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    occasion: _.find(state.occasions, {id:ownProps.match.params.id})
})


export default connect(mapStateToProps)(Occasion);
