import { store } from "../../../index"

export function setJourneyList(NewLoadState) {
NewLoadState.sort(function(a,b){
    return new Date(b.journey.departure) - new Date(b.journey.departure);
})
    store.dispatch({
        type: "setJourneyList",
        payload: {
            journeyList: NewLoadState,
        }
    })
}
export function setStatus(suc, err) {

    store.dispatch({
        type: "setStatus",
        payload: {
            success: suc,
            error: err
        }
    })
}

export function setIsLoading(status) {

    store.dispatch({
        type: "setIsLoading",
        payload: {
            isLoading:status,
        }
    })
}