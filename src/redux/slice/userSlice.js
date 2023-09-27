import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false,
};
export const fetchAllUser = createAsyncThunk("users/fetchAllUser", async () => {
    const response = await axios.get("http://localhost:8080/users/all");
    return response.data;
});
export const createUserRedux = createAsyncThunk("users/createUserRedux", async (email, password, username) => {
    const response = await axios.post("http://localhost:8080/users/create", { email, password, username });
    return response.data;
});
export const deleteUserRedux = createAsyncThunk("users/deleteUserRedux", async (id) => {
    const response = await axios.post(`http://localhost:8080/users/delete/${id}`);
    return response.data;
});
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUser.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(createUserRedux.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createUserRedux.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(createUserRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteUserRedux.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteUserRedux.fulfilled, (state, action) => {
                state.listUsers = action.payload;
            })
            .addCase(deleteUserRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default userSlice.reducer;
