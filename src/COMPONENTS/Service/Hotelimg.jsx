import React from 'react'
import axios from 'axios'
import { fetchingHotel,hotelsuccessful,Hotelfailed } from '../Redux/Slice'

export const hotelImages = (dispatch) => {
    const endpoint1 = "https://airtaxy-app-backend.onrender.com/airtaxy/admin/hotelimage"
    axios.get(endpoint1).then((response) => {
        console.log(response.data.message)
        console.log(response.data.images)
        dispatch(hotelsuccessful(response.data.images))
    }).catch((error) => {
        console.log(error)
        dispatch(Hotelfailed(error))
    })
    
  
}
