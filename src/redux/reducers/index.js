import Detail from "./Detail/reducers_Detail";
import Locations from "./Locations/reducers_Locations";
import Session from "./Session/reducers_Session";
import { combineReducers } from "redux";


const reducersCombined = combineReducers({
        Detail,
        Locations,
        Session
})

export default reducersCombined; 