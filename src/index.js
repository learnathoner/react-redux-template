// Core imports
import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
// Middlware imports
import { Provider } from "react-redux";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";

// REDUX Devtools plugin for chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// LoggerMiddleWare - Logs all actions
const loggerMiddleWare = createLogger();

const store = createStore(
  rootReducer,
  /* preloadedState, */
  /* Use composeEhancers to add redux devtools */
  composeEnhancers(applyMiddleware(thunkMiddleWare, loggerMiddleWare))
);

// // Initialize store?
// store.dispatch(someAction())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
