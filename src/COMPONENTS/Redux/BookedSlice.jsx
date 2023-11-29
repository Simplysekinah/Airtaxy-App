import { createSlice } from "@reduxjs/toolkit";

export const Book= createSlice({
    name: "Bookflight",
    initialState:{
            isBooking: false,
            allBooked: [],
            bookError: null
    },
    reducers:{
        Onbooking: (state) =>{
            state.isBooking = true
            state.allBooked = []
            state.bookError= false
        },
        Bookingsuccessful: (state, action)=>{
            state.isBooking= false
            state.allBooked = action.payload
            state.bookError = false
        },
        Bookingerror: (state, action) =>{
            state.isBooking = false
            state.allBooked = []
            state.bookError = action.payload
        },
    }
})


export default Book.reducer
export const
 {Onbooking, Bookingsuccessful, Bookingerror} = Book.actions