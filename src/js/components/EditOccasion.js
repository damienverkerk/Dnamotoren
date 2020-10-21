import React from 'react';
import OccasionForm from './OccasionForm';
import { connect } from 'react-redux';
import { editOccasion } from '../actions/occasions';

const EditOccasion = (props) => (
<div className="container__box">
    <OccasionForm occasion={props.occasion} onSubmitOccasion={(occasion) => {
        props.dispatch(editOccasion(props.occasion.id, occasion));
        props.history.push('/');
    }}
    />
</div>
    );

    const mapStateToProps = (state, props) => {
        return {
            occasion: state.occasions.find((occasion) => 
            occasion.id === props.match.params.id)
        };
    };

    export default connect(mapStateToProps)(EditOccasion);