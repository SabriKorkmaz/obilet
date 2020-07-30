import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Home from "./routes/home"
import Detail from "./routes/detail"
import reducerCombined from "./redux/reducers"
import {
    Route,
    BrowserRouter,
} from "react-router-dom";

export const store = createStore(reducerCombined)

const App = () => (
    <div style={{ height: "100%", width: "100%" }}>
        <Route exact path="/" component={Home} key="home" />
        <Route exact path="/Detail" component={Detail} key="Detail" />
    </div >
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();

