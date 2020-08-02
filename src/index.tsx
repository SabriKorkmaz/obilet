import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {Home} from "./routes/home/index";
// import Detail from "./routes/detail";
import { Route, BrowserRouter } from "react-router-dom";


const App = () => (
  <div style={{ height: "100%", width: "100%" }}>
    <Route exact path="/" component={Home} key="home" />
    {/* <Route exact path="/Detail" component={Detail} key="Detail" /> */}
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
