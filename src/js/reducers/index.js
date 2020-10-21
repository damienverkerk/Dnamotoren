import { combineReducers } from "redux";
import auth from "./auth";
import occasions from "./occasions";
import filters from "./filters";


export default combineReducers({ filters, occasions, auth });