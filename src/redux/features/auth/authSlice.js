import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: {
        isLoading: false,
        user: null,
        isError: false,
    },
};


export const getMe = createAsyncThunk('Auth/getMe', async (email) => {
    const res = await fetch(`http://localhost:5000/api/v1/users/login/${email}`, {
        credentials: 'include'
    });
    const data = await res.json();

    return data?.data;
})
const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMe.pending, (state, action) => {
                state.auth.isLoading = true,
                    state.auth.user = null,
                    state.auth.isError = false
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.auth.isLoading = false,
                    state.auth.user = action.payload,
                    state.auth.isError = false
            })
            .addCase(getMe.rejected, (state, action) => {
                state.auth.isLoading = false,
                    state.auth.user = null,
                    state.auth.isError = false
            })
    }
});



// export const {} = productSlice.actions;
export default authSlice.reducer;
