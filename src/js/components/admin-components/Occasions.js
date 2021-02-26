import React, {Component} from "react";
import Navigation from "./Navigation"; 
import {NavLink} from 'react-router-dom';

import OccasionList from "./OccasionsList";

class OccasionsCRUD extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <NavLink to="/admin/occasions/add" activeClassName='activeNav'><button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Occasion</button></NavLink>
                <OccasionList />
            </div>
        );
    }
}

export default OccasionsCRUD;