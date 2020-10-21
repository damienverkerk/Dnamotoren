import React, { Component } from "react";
import { logoutUser } from "../../actions";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Navigation extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">DNA Motoren</span>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"to="/admin">Dashboard</Link>
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/admin/occasions">Occasions</Link>
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/admin/profile">Profiel</Link>
                        </div>
                        <div>
                        <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><button onClick={this.handleLogout}>logout</button></a>
                        {isLoggingOut && <p>Logging Out.....</p>}
                        {logoutError && <p>Error logging out</p>}
                        </div>
                    </div>
                </nav>
            </div>
        )};
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}
export default connect(mapStateToProps)(Navigation);