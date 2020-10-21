import React, {Component} from "react";
import Navigation from "./Navigation"; 

class Profile extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container mx-auto">
                <h1> Mijn profiel </h1>
                <p>naam : danny</p>
                </div>
            </div>
        );
    }
}

export default Profile;