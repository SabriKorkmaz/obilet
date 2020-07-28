var initalState = {
    originList: [],
    origin: null,
    destinationList: [],
    destination: null,
    date: null
}

export default function reducers_Locations(state = initalState, action) {
    switch (action.type) {

        case "setOriginList":
            return Object.assign({}, state, { originList: action.payload.originList })
        case "setDestinationList":
            return Object.assign({}, state, { destinationList: action.payload.destinationList })
        case "setOrigin":
            return Object.assign({}, state, { origin: action.payload.origin })
        case "setDestination":
            return Object.assign({}, state, { destination: action.payload.destination })
        case "reloadDestinationList":
            return Object.assign({}, state, { destinationList: action.payload.destinationList })
        case "setDate":
            return Object.assign({}, state, { date: action.payload.date })
        default:
            return state
    }

}
