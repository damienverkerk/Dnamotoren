import React, {Component} from "react";
import Navigation from "./Navigation"; 

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container mx-auto">
                <h1> This is your App's protected area </h1>
                <p>Any routes here will also be protected</p>
                </div>
            </div>
        );
    }
}

export default Dashboard;