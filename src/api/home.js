import * as LocationsActions from "../redux/actions/Locations/Locations"
import * as SessionActions from "../redux/actions/Session/Session"

import { makeRequest } from "./base";


export const getLocations = (sessionId, deviceId) => {
    makeRequest("post", "/GetLocations", {
        "SessionId": sessionId,
        "DeviceId": deviceId
    }, function (response) {
        SessionActions.setSession(response.data.SessionId, response.data.DeviceId)
        LocationsActions.setOriginList(response.data.Data)
        LocationsActions.setDestinationList(response.data.Data)
    })
}
