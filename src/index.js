import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//redux persist
import configureStore, { persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

//normal redux
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();