import { store } from "../../../index"


export function setOriginList(NewLoadState) {
    let options = []
    NewLoadState.map(function (val, i) {
        var item = {
            value: val.id,
            label: val.name
        }
        options.push(item)
    })
    store.dispatch({
        type: "setOriginList",
        payload: {
            originList: options,
        }
    })
}
export function setDestinationList(NewLoadState) {
    let options = []
    NewLoadState.map(function (val, i) {
        var item = {
            value: val.id,
            label: val.name
        }
        options.push(item)
    })
    store.dispatch({
        type: "setDestinationList",
        payload: {
            destinationList: options,
        }
    })
}
export function reloadDestinationList(NewLoadState) {

    store.dispatch({
        type: "reloadDestinationList",
        payload: {
            destinationList: NewLoadState,
        }
    })
}
export function setDate(NewLoadState) {
    localStorage.setItem("date",NewLoadState)
    store.dispatch({
        type: "setDate",
        payload: {
            date: NewLoadState,
        }
    })
}
export function setOrigin(NewLoadState) {
    localStorage.setItem("origin", JSON.stringify(NewLoadState))
    store.dispatch({
        type: "setOrigin",
        payload: {
            origin: NewLoadState,
        }
    })
}
export function setDestination(NewLoadState) {
    localStorage.setItem("destination", JSON.stringify(NewLoadState))
    store.dispatch({
        type: "setDestination",
        payload: {
            destination: NewLoadState,
        }
    })
}


