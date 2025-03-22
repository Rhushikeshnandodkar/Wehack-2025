import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
import axios from "axios"

export const fetchClasses = createAsyncThunk("classes/fetchall", async(data, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/room`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",               
            }
        })
        const data = await res.json()
        return data
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})
const initialState = {
    isLoading : true,
    classes : null,
    singleclass : null,
    error : false,
    status : null,
    classanalytics : null
}

const tutorSlice = createSlice({
    name : 'tutor',
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchClasses.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchClasses.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.classes = action.payload
            state.status = 200
        })
        builder.addCase(fetchClasses.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })
    }
})

export default tutorSlice.reducer