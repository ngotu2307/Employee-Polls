import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialUiState = { isAuthen: true }

const uiSlice = createSlice({
    name: 'auth',
    initialState: initialUiState,
    reducers: {
        login(state) {
            state.isAuthen = true
        },
        logout(state) {
            state.isAuthen = false
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer;