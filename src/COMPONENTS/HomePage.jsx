import React, { useState, useEffect } from 'react'
import air from '../Images/pic.jfif'
import logo from '../Images/Logo.png'
import { HiMenuAlt1 } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import leg from '../Images/legs.png'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingsuccessful, fetchingPost, fetcingFailed } from './Redux/Slice'
import { hotelImages } from './Service/Hotelimg'
import { Link, useNavigate } from 'react-router-dom'
import hom from '../Images/hom.png'
import home from '../Images/home.png'
import plan from '../Images/plan.png'
import plane from '../Images/plane1.png'
import hote from '../Images/hote.png'
import hotel from '../Images/hotel.png'
import vacatio from '../Images/vacatio.png'
import vacation1 from '../Images/vacation1.png'

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { allpost, isfetching, fetcherror, isHotel, allHotel, Hotelerror } = useSelector((state) => state.airway)
    console.log(allpost);
    console.log(allHotel);
    console.log(isfetching);
    const [img1, setimg1] = useState([])
    const [hotelimage, sethotelimage] = useState([])
    const [email, setemail] = useState('')
    const [homd, sethomd] = useState(false)
    const [flightpage, setflightpage] = useState(true)
    const [hotelpage, sethotelpage] = useState(true)
    const [vacationpage, setvacationpage] = useState(true)
    const first =()=>{
        {homd? sethomd(true):sethomd(false)}
        navigate('/home')
    }
    const second =()=>{
        {flightpage? setflightpage(false):setflightpage(true)}
        navigate('/book')
    }
    const third =()=>{
        {hotelpage? sethotelpage(false):sethotelpage(true)}
        // navigate('/')
    }
    const fourth =()=>{
        {vacationpage? setvacationpage(false):setvacationpage(true)}
        // navigate('/')
    }
    const endpoints = "https://airtaxy-app-backend.onrender.com/airtaxy/homepage"
    const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/admin/getimage"
    const endpoint1 = "https://airtaxy-app-backend.onrender.com/airtaxy/admin/hotelimage"
    const endpoint2 = "https://airtaxy-app-backend.onrender.com/airtaxy/token"
    let informs = JSON.parse(localStorage.getItem("userinfo"))
    // console.log(informs);
    // console.log(informs.email);
    useEffect(() => {
        const token = localStorage.token
        axios.get(endpoints, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            console.log(response)
            console.log(response.data.token);
            // setemail(response.data.email)
            // const seki=setemail !== informs.email
            if (!token) {
                navigate("/login")
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        axios.get(endpoint).then((response) => {
            console.log(response.message)
            console.log(response.data)
            dispatch(fetchingsuccessful(response.data.images))
            setimg1(response.data.images)
            console.log(setimg1)
        }).catch((error) => {
            console.log(error)
            dispatch(fetcingFailed(error))
        })
    }, [])

    useEffect(() => {
        hotelImages(dispatch)
    }, [])
    useEffect(() => {

        console.log(allpost);
    }, [allpost])

    useEffect(() => {

        console.log(allHotel);
    }, [allHotel])

    const ApiImage = (hotels) => {
        let counter = 0
        return allHotel.map((element, index) => {
            if (element.hotels === hotels) {
                if (counter < 1) {
                    counter++
                    return (
                        <div className='long-img' key={index}>
                            <img className='small-img img-fluid' src={element.imageUrl} />
                        </div>
                    )
                }
            }
        })
    }
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <>
            <div className='homepage-div'>
                <div className='thirdpage-one'>
                    <div className='container-fluid home-up'>
                        <div>
                            <img className='air' src={air} alt="" />
                        </div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        {/* <HiMenuAlt1/> */}
                        <div>
                            <HiMenuAlt1 className='icon1 navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" />
                            <span className="navbar-toggler-icon"></span>
                            <div className="offcanvas offcanvas-end text-white sections" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                        <img src={logo} alt="" />
                                    </h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/book'>Book Flight</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=''>Book Hotel</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to=''>Go on vacation</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/login' onClick={logout}>Log Out</Link>
                                        </li>
                                        {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container d-flex div-inp'>
                        <div className='div-inp2'>
                            <div className='icon-div'><FiSearch className='icon2' /></div>
                            <input type="text" placeholder='search' className='inp-home' />
                        </div>

                    </div>
                    <br />
                    <div className='container'>
                        <div className='middle'>
                            <div className='middle-p'>The journey of a thousand miles begins with a single step.  </div>
                            <div className=''>
                                <img src={leg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='trending'>Trending flight deals</div>

                        </div>
                        <div className='img-div1'>
                            <div className='d-flex gap-4 img-div'>
                                {allpost &&
                                    allpost.map((index, id) => (
                                        <div className='long-img' key={id}>
                                            {/* <div>{index.imageUrl}</div> */}
                                            <img className='small-img img-fluid' src={index.imageUrl} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            Hotels
                        </div>
                        <div className='img-div1'>
                            <div className='d-flex gap-4 img-div'>
                                <div>{ApiImage('Abuja hotel')}</div>
                                <div>{ApiImage('Dubai hotel')}</div>
                                <div>{ApiImage('United Kingdom hotel')}</div>
                                <div>{ApiImage('United State of America hotel')}</div>
                                <div>{ApiImage('Canada hotel')}</div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-div'>
                       <button onClick={first} className='bottom-hold'>
                            <img src={homd? hom:home} alt="" />
                        </button>
                        <button onClick={second} className='bottom-hold'>
                            <img src={flightpage? plan:plane} alt="" />
                        </button>
                        <button onClick={third} className='bottom-hold'>
                            <img src={hotelpage? hote:hotel} alt="" />
                        </button>  
                        <button onClick={fourth} className='bottom-hold'>
                            <img src={vacationpage? vacatio:vacation1} alt="" />
                        </button>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage