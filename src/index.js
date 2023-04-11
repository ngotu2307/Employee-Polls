import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import persistReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import middleware from "./middleware";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = createStore(persistReducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
);
