import React from 'react'
import axios from 'axios'
import { Onbooking,Bookingsuccessful,Bookingerror } from '../Redux/BookedSlice'
import { fetchingFlight, flightFetched,fetchedError } from '../Redux/FlightBookSlice'

export const receipts = (dispatch) =>{
    const token = localStorage.token
    const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/details"

    axios.get(endpoint, {
        headers: {
            "Authorization": `bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    ).then((response) => {
        console.log(response);
        dispatch(Bookingsuccessful(response.data.summary))
        // setcheck(response.data.summaryCheck)
        dispatch(flightFetched(response.data.summaryCheck))
        const bookclass = response.data.summary.classes
        const matchingclass= response.data.summaryCheck.classes.find((element)=>element.class === bookclass)
        if(matchingclass){
            console.log(matchingclass);
            dispatch(flightFetched(matchingclass))
        }else{
            console.log('matching not found');
        }
    }).catch((error) => {
        console.log(error)
    })
}