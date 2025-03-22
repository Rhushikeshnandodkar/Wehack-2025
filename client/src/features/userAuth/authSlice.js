import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
import axios from "axios";

export const userSignup = createAsyncThunk("user/signup", async(data, thunkAPI) =>{
    const config = {
      method : "post",
      url : `${url}/api/user/register`,
      headers : {
        'Authorization' : '',
        'Content-Type' : 'application/json'
      },
      data
    }
    const response = await axios(config)
    localStorage.setItem("userToken", response.data.token)
    localStorage.setItem('user', JSON.stringify({...data}))
    const {dispatch} = thunkAPI
    dispatch(getUserInfo())
    return response.data
  })

export const userLogin = createAsyncThunk("user/login", async(data, thunkAPI) =>{
    try{
      const config = {
        method : 'post',
        url : `${url}/api/user/login`,
        headers : {
          'Authorization': '',
          'Content-Type': 'application/json'
      },
      data
      }
      const response = await axios(config)
      localStorage.setItem("userToken", response.data.token)
      const {dispatch} = thunkAPI
      dispatch(getUserInfo())
      return response.data
    }catch(err){
      return thunkAPI.rejectWithValue(err.response.status)
    }
  })

export const getUserInfo = createAsyncThunk("user/user-info", async(_, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/user/currentuser`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }
        })
        const data = await res.json()
        // console.log(data)
        const userData = data?.user
        console.log(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        console.log(res)
        if (res.status == 200){
            return {...data}
        }else{
            return thunkAPI.rejectWithValue(data)
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.status)
    }
})
const initialState = {
  isLoading : true,
  user : JSON.parse(localStorage.getItem("user")),
  userToken : localStorage.getItem("userToken"),
  isAuthenticated : false,
  error : false,
  status : null,
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : (builder) =>{
        const handlePending = (state) =>{
          state.isLoading = true,
          state.error = null
        }
    
        const handleFulfilled = (state, {payload}) =>{
          state.isLoading = false;
        //   state.userToken = payload.token;
          state.isAuthenticated = true;
          state.status = 200;
          state.isAuthenticated = true
        }
        const handleRejected = (state, { payload }) => {
          state.isLoading = false;
          state.isAuthenticated = false;
          state.userToken = null;
          state.status = 401
        };

        builder
        .addCase(userSignup.pending, handlePending)
        .addCase(userSignup.fulfilled, handleFulfilled)
        .addCase(userSignup.rejected, handleRejected)

        .addCase(userLogin.pending, handlePending)
        .addCase(userLogin.fulfilled, handleFulfilled)
        .addCase(userLogin.rejected, handleRejected) 
    
        .addCase(getUserInfo.pending, handlePending)
        .addCase(getUserInfo.fulfilled, handleFulfilled)
        .addCase(getUserInfo.rejected, handleRejected)


    }    
})

export default userSlice.reducer