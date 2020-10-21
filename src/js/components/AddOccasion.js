import React from 'react';
import OccasionForm from './OccasionForm';
import { connect } from 'react-redux';
import { addOccasion } from '../actions/occasions';
import Navigation from '../components/admin-components/Navigation';

const AddOccasion = (props) => (
    <div>
        <Navigation />
        <h3>Set Occasion information: </h3>
        <OccasionForm
        onSubmitOccasion={(occasion) => {
            props.dispatch(addOccasion(occasion));
            props.history.push('/')
        }}
        />
    </div>
);

export default connect()(AddOccasion);