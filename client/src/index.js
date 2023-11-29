import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import {store} from "./redux/store";
import "./sass/main.scss";
import App from "./Modules/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
        </Provider>
  </React.StrictMode>
);
