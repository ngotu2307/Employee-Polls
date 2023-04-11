import { render } from "@testing-library/react";
import React from 'react';
import Navigation from "./Navigation";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store";
import { setAuthedUser } from "../actions/authedUser";
import '@testing-library/jest-dom'

describe('Navigation', () => {
    it("should render the component", () => {
        var component = render(
            <Provider store={store}>
                <Router>
                    <Navigation />
                </Router>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("will show authed username", () => {
        store.dispatch(setAuthedUser("sarahedo"));

        const component = render(
            <Provider store={store}>
                <Router>
                    <Navigation />
                </Router>
            </Provider>
        );
        expect(component.getByTestId('authedUser-text')).toHaveTextContent("sarahedo");
    });
});