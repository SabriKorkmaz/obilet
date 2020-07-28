
import { makeRequest } from "./base";
import * as detailActions from "../redux/actions/Detail/Detail"

export const getJourneys = (journey) => {
    detailActions.setIsLoading(true)
    makeRequest("post", "/getJourneys", {
        "OriginId": journey.originId,
        "DestinationId": journey.destinationId,
        "Date": journey.date,
        "SessionId": journey.sessionId,
        "DeviceId": journey.deviceId
    }, function (response) {
        console.log(response.data.Data)
        detailActions.setIsLoading(false)
        detailActions.setJourneyList(response.data.Data)
    })

}

