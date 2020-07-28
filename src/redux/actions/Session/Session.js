import { store } from "../../../index"


export function setSession(NewLoadState, SecondLoadState) {

    store.dispatch({
        type: "setSession",
        payload: {
            sessionId: NewLoadState,
            deviceId: SecondLoadState
        }
    })
}
