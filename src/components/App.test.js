import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

describe('App', () => {
  it("should render the component", () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});