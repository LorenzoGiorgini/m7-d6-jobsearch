import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//redux persist
import persistor from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

//normal redux
import { Provider } from "react-redux";
import configureStore from "./redux/store/store";

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();