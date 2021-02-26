import React from "react";
import Navigation from "./Navigation";
import OccasionList from "./OccasionList";
import OccasionFilter from "./OccasionFilters";

const Occasions = () => {
    return (
        <div>
            <Navigation />
            <OccasionFilter />
            <OccasionList />
        </div>
    )
}

export default Occasions;