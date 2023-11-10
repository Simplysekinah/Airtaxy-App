import { createSlice } from "@reduxjs/toolkit";

export const Airway = createSlice({
    name:"Flights",
    initialState:{
        isfetching: false, //loading process
        allpost:[], //when fetch is successful
        fetcherror:null, // when there is error,
        isHotel:false,
        allHotel:[],
        Hotelerror:null
    },
    //reducer is the one that update state
    reducers:{
        fetchingPost: (state) =>{
            state.isfetching = true
            state.allpost = []
            state.fetcherror= false
        },
        fetchingsuccessful: (state, action)=>{
            state.isfetching= false
            state.allpost = action.payload
            state.fetcherror = false
        },
        fetcingFailed: (state, action) =>{
            state.isfetching = false
            state.allpost = []
            state.fetcherror = action.payload
        },
        fetchingHotel: (state) =>{
            state.isHotel = true
            state.allHotel = []
            state.Hotelerror= false
        },
        hotelsuccessful: (state,action) =>{
            state.isHotel = false
            state.allHotel = action.payload
            state.Hotelerror= false
        },
        Hotelfailed: (state,action) =>{
            state.isHotel = false
            state.allHotel = []
            state.Hotelerror= action.payload
        }
    }
})

export default Airway.reducer
export const
 {fetchingPost, fetchingsuccessful, fetcingFailed,fetchingHotel,hotelsuccessful,Hotelfailed} = Airway.actions
