import { createSlice } from "@reduxjs/toolkit";

export const Check= createSlice({
    name: 'flight',
    initialState:{
        Bookingflight: false,
        Booked: [],
        Bookingerror:null
    },
    reducers:{
        fetchingFlight: (state)=>{
            state.Bookingflight = true
            state.Booked = []
            state.Bookingerror = false
        },
        flightFetched: (state,action)=>{
            state.Bookingflight = false
            state.Booked = action.payload
            state.Bookingerror = false
        },
        fetchedError: (state)=>{
            state.Bookingflight = false
            state.Booked = []
            state.Bookingerror = action.payload
        }
    }
})

export default Check.reducer

export const {fetchingFlight, flightFetched, fetchedError} = Check.actions