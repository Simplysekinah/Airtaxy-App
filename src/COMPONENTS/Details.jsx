import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import logo from '../Images/Logo.png'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
// import { Onbooking, Bookingsuccessful, Bookingerror } from './Redux/BookedSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
// import { fetchingFlight, flightFetched, fetchedError } from './Redux/FlightBookSlice'
import { receipts } from './Service/Receipts'
import Props4 from './Props4'
import vector from '../Images/Vector 1.png'
import plane1 from '../Images/plane.png'

const Details = () => {
    const navigate = useNavigate()
    const [upid, setupid] = useState('')
    const dispatch = useDispatch()
    const [sum, setsum] = useState([])
    const [check, setcheck] = useState({})
    const [isloading, setisloading] = useState(false)
    const [buttondisabled, setbuttondisabled] = useState(false)
    const flight = JSON.parse(localStorage.getItem('flightss'))
    console.log(flight);
    const { allBooked, isBooking, bookError } = useSelector((state) => state.book)
    console.log(allBooked);
    const { Bookingflight, Booked, Bookingerror } = useSelector((state) => state.Check)
    console.log(Booked);
    // const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/details"
    const endpoints = "https://airtaxy-app-backend.onrender.com/airtaxy/deleteflight"
    const token = localStorage.token
    console.log(token);

    let route = useParams()
    const id = route
    const from = id.from.charAt(0).toUpperCase() + id.from.slice(1)
    const to = id.to.charAt(0).toUpperCase() + id.to.slice(1)
    const classes = id.classes.charAt(0).toUpperCase() + id.classes.slice(1)
    console.log(from, to, classes);

    useEffect(() => {
        console.log(allBooked);
    }, [allBooked])

    useEffect(() => {
        console.log(Booked)
    }, [Booked])

    useEffect(() => {
        receipts(dispatch)
    }, [])


    // useEffect(() => {
    //     console.log(token)
    //     axios.get(endpoint, {
    //         headers: {
    //             "Authorization": `bearer ${token}`,
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     }
    //     ).then((response) => {
    //         console.log(response);
    //         dispatch(Bookingsuccessful(response.data.summary))
    //         // setcheck(response.data.summaryCheck)
    //         dispatch(flightFetched(response.data.summaryCheck))
    //         const bookclass = response.data.summary.classes
    //         const matchingclass= response.data.summaryCheck.classes.find((element)=>element.class === bookclass)
    //         if(matchingclass){
    //             console.log(matchingclass);
    //             dispatch(flightFetched(matchingclass))
    //         }else{
    //             console.log('matching not found');
    //         }
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])
    const cancel = (element) => {
        setbuttondisabled(true)
        setisloading(true)
        console.log(element);
        console.log(element._id);
        setupid(element._id);
        console.log(upid);
        axios.post(endpoints,
            { upid },
            {
                headers: {
                    "Authorization": `bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((response) => {
                console.log(response)
                setisloading(false)
                toast.success(response.data.message)
                setTimeout(() => {

                    navigate('/book')
                }, 3000);
            }).catch((error) => {
                console.log(error)
                setisloading(false)
            })
    }

    const confirm = () => {
        setbuttondisabled(true)
            setisloading(true)
        setTimeout(() => {
            navigate('/seat')

        }, 3000);
    }

    return (
        <>
            <div>
                <div className='detail-up'>
                    <div className='thirdpage-one'>
                        <div className='d-flex align-items-center justify-content-around details-up '>
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
                                <div className='' >
                                    <div className='arrow'>
                                        <div className='from'>{allBooked.from}</div>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <div className='sm-circle'></div>
                                            <div className='sm-long'></div>
                                            <div className='sm-circle'></div>
                                        </div>
                                        <div className='to'>{allBooked.to}</div>
                                    </div>
                                    <div className='clas1'>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className='clas text-center d-flex justify-content-center align-items-center'>{classes}</div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className='d-flex align-items-center justify-content-evenly mt-5'>
                                        <div className='date'>
                                            <div className='date1'>{allBooked.dates}</div>
                                        </div>
                                        <div className='time'>
                                            <div className='time1'>{allBooked.passenger}</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div>{Booked.price}</div>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        {/* <button className='cancel' onClick={() => cancel(allBooked)}>Cancel</button> */}
                                        <div className='flights-btns'>
                                            <div className='flight-btns'>
                                                <button className="flight-btn1" type='button' onClick={() => cancel(allBooked)} disable={buttondisabled}>
                                                    <div className='con-btn'>
                                                        <div className='don'>Done</div>
                                                        <img className='vect' src={vector} alt="" />
                                                        <img className='plane-lg' src={plane1} alt="" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <button className='cancels' onClick={confirm}>Confirm</button> */}
                                        <Props4 gradient='Confirm' gradient1='continue-clk' onClick={confirm} pass='Submit' disable={buttondisabled} />
                                    </div>
                                    <ToastContainer />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Details