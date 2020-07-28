var initalState = {
    sessionId: "",
    deviceId: ""
}

export default function reducers_Session(state = initalState, action) {
    switch (action.type) {
        case "setSession":
            return Object.assign({}, state,
                {
                    sessionId: action.payload.sessionId,
                    deviceId: action.payload.deviceId
                })
        default:
            return state
    }

}