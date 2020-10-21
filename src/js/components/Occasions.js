import React, {Component} from "react";
import Navigation from "./Navigation";
import OccasionList from "./OccasionList";
import OccasionFilter from "./OccasionFilters";
import getVisibleOccasions from '../selectors/occasions';

class Occasions extends Component {
    render() {
        return (
            <div>
                <Navigation />
                
                <h1> Occasions </h1>
                <OccasionFilter />
                <OccasionList />
            </div>
        );
    }
}


export default Occasions;