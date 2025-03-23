import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
import axios from "axios";

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
});

export const fetchRelatedMessage = createAsyncThunk("fetch-cosines", async(roomId, thunkAPI) =>{
    try{
        console.log(roomId);
        
        const res = await fetch(`${url}/api/chats/cosine/${roomId}`, {
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
});

export const createClasses = createAsyncThunk("classes/create", async (data, thunkAPI) => {
    try {
        console.log(data);
        
        const res = await fetch(`${url}/api/room/`, {
            method: "POST",
            headers : {
                // "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                // Accept: "application/json",
            }  ,
            body: data,
        });
        
        if (!res.ok) {
            throw new Error("Failed to create class");
        }
        
        const responseData = await res.json();
        console.log(responseData)
        return responseData;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message || "An error occurred");
    }
});



const initialState = {
    isLoading : true,
    classes : null,
    singleclass : null,
    error : false,
    status : null,
    classanalytics : null,
    relatedMessage: null,
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

        builder.addCase(createClasses.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(createClasses.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.classes = action.payload
            state.status = 200
        })
        builder.addCase(createClasses.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder.addCase(fetchRelatedMessage.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchRelatedMessage.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.relatedMessage = action.payload
            state.status = 200
        })
        builder.addCase(fetchRelatedMessage.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

    }
})

export default tutorSlice.reducer