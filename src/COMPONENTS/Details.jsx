import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import logo from '../Images/Logo.png'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Onbooking, Bookingsuccessful, Bookingerror } from './Redux/BookedSlice'
import { useParams } from 'react-router-dom'

const Details = () => {
    const dispatch = useDispatch()
    const [sum, setsum] = useState([])
    const flight = JSON.parse(localStorage.getItem('flightss'))
    console.log(flight);
    const { allBooked, isBooking, bookError } = useSelector((state) => state.book)
    console.log(allBooked);
    const endpoint = "http://localhost:5002/airtaxy/details"
    const endpoints = "http://localhost:5002/airtaxy/bookflight"
    const token = localStorage.token
    console.log(token);

    let route = useParams()
    const id = route
    const from = id.from.charAt(0).toUpperCase() + id.from.slice(1)
    const to = id.to.charAt(0).toUpperCase() + id.to.slice(1)
    const classes = id.classes.charAt(0).toUpperCase() + id.classes.slice(1)
    console.log(from, to, classes);

    axios.post(endpoints, { to: to, from: from, classes: { classes } }
    ).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
    // }, [])

    useEffect(() => {
        console.log(allBooked);
    }, [allBooked])

    
    useEffect(() => {
        console.log(token)
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
            console.log(dispatch);
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    



    return (
        <>
            <div>
                <div className='details-up'>
                    <div className='d-flex justify-content-around'>
                        <div className='con-bck'>
                            <div className='con-bck1'>
                                <div className='con-bck2'>
                                    <MdArrowBackIos />
                                </div>
                            </div>
                        </div>
                        <div className='flight-d'>Flight Details</div>
                    </div>
                    <br />
                    <br />
                    <div className='details'>
                        <div className='text-center d-flex justify-content-center mt-2'>
                            <div className='logo-bg'>
                                <img className='move-log' src={logo} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            {allBooked &&
                                allBooked.map((element, index) => (
                                    <div className='' key={index}>
                                        <div className='arrow'>
                                            <div className='from'>{element.from}</div>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <div className='sm-circle'></div>
                                                <div className='sm-long'></div>
                                                <div className='sm-circle'></div>
                                            </div>
                                            <div className='to'>{element.to}</div>
                                        </div>
                                        <div className='clas1'>
                                            <div className='clas text-center'>{element.classes}</div>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center justify-content-evenly mt-5'>
                                            <div className='date'>
                                                <div className='date1'>{element.dates}</div>
                                            </div>
                                            <div className='time'>
                                                <div className='time1'>{element.passenger}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <hr />

                    </div>
                    <div className='d-flex'>
                        <button>Cancel</button>
                        <button>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details