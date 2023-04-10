import { render } from "@testing-library/react";
import React from 'react';
import Navigation from "./Navigation";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "../store";
import { setAuthedUser } from "../actions/authedUser";
import '@testing-library/jest-dom'
import { PersistGate } from 'redux-persist/integration/react'

describe('Navigation', () => {
    it("should render the component", () => {
        var component = render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Navigation />
                    </Router>
                </PersistGate>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("will show authed username", () => {
        store.dispatch(setAuthedUser("sarahedo"));

        const component = render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Navigation />
                    </Router>
                </PersistGate>
            </Provider>
        );
        expect(component.getByTestId('authedUser-text')).toHaveTextContent("sarahedo");
    });
});