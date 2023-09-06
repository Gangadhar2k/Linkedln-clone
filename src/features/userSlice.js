import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState:{
        user : {
            name:"gangadhar"
        },
    },
    reducers:{
        login:(state,action)=>{
            state.value = action.payload
        },
        logout:(state)=>{
            state.user = null
        }
    }
})

export const {login,logOut} = userSlice.actions;

export const selectUser = (state)=> state.user.value;
export default userSlice.reducer;