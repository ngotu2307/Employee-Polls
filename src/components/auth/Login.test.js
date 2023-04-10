import { render, fireEvent } from "@testing-library/react";
import React from 'react';
import Login from "./Login";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'
import { store, persistor } from "../../store";
import { PersistGate } from 'redux-persist/integration/react'

describe('Login', () => {
    it("should render the component", () => {
        var component = render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Login />
                    </Router>
                </PersistGate>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('will have all expected fields', () => {
        var component = render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Login />
                    </Router>
                </PersistGate>
            </Provider>
        );

        var userNameInput = component.getByTestId('username-input')
        var passwordInput = component.getByTestId('password-input')
        expect(userNameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        var submitButton = component.getByText('Submit')
        expect(submitButton).toBeInTheDocument();
    });

    it('will display an error if the username not valid.', () => {
        var component = render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        var submitButton = component.getByTestId('submit-button');
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-message')).toBeInTheDocument();
    });

    it('will display an error if the password not valid.', () => {
        var component = render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        var submitButton = component.getByTestId('submit-button');
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-message')).toBeInTheDocument();
    });

    it('will hide error message if the name and password is provided.', () => {
        var component = render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        var userNameInput = component.getByTestId('username-input')
        var passwordInput = component.getByTestId('password-input')
        fireEvent.change(userNameInput, { target: { value: 'ngotu' } });
        fireEvent.change(passwordInput, { target: { value: '1234' } });
        expect(component.getByTestId('error-message')).toHaveTextContent("");
    });
});