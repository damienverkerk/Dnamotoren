import React, {Component} from "react";
import Navigation from "./Navigation";
import OccasionList from "./OccasionList";
import OccasionFilter from "./OccasionFilters";

const Occasions = () => {
    return (
        <div>
            <Navigation />

            <h1>Occasions</h1>
            <OccasionFilter />
            <OccasionList />
        </div>
    )
}

export default Occasions;