var initalState = {
    journeyList: [],
    isLoading: false,
    error: false,
    success: false,
}

export default function reducers_Category(state = initalState, action) {
    switch (action.type) {
        case "setJourneyList":
            return Object.assign({}, state, { journeyList: action.payload.journeyList })
        case "setIsLoading":
            return Object.assign({}, state, { isLoading: action.payload.isLoading })
        case "setStatus":
            return Object.assign({}, state, {
                success: action.payload.success,
                error: action.payload.error,
            })
        default:
            return state
    }

}