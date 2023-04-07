import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import persistReducer from "./reducers";
import { persistStore } from 'redux-persist'
import { BrowserRouter as Router } from "react-router-dom";
import middleware from "./middleware";
import { PersistGate } from 'redux-persist/integration/react'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = createStore(persistReducer, middleware);
const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
);
