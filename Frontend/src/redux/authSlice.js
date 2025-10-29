import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        userData:null,

    },
    reducers:{
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setUserData:(state,action)=>{
            state.userData=action.payload
        }

    }
})

export const {setLoading,setUserData} = authSlice.actions
export default authSlice.reducer