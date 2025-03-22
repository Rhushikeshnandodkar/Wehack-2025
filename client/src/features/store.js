import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userAuth/authSlice'
import tutorReducer from './tutor/tutorSlice'
const store = configureStore({
    reducer : {
        user : userReducer,
        tutor : tutorReducer
    }
})

export default store;