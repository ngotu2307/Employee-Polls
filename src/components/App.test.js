import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from "react-router-dom";

describe('App', () => {
  it("should render the component", () => {
    const component = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});