import React, { useState, useEffect } from 'react'
import plane from '../Images/plane 2.png'
import { AiFillCaretDown } from 'react-icons/ai'
import vector from '../Images/Vector 1.png'
import plane1 from '../Images/plane.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hom from '../Images/hom.png'
import home from '../Images/home.png'
import plan from '../Images/plan.png'
import planes from '../Images/plane1.png'
import hote from '../Images/hote.png'
import hotel from '../Images/hotel.png'
import vacatio from '../Images/vacatio.png'
import vacation1 from '../Images/vacation1.png'

const Bookflight = () => {
  const navigate = useNavigate()
  const [from, setfrom] = useState('')
  const [to, setto] = useState('')
  const [dates, setdates] = useState('')
  const [passenger, setpassenger] = useState('')
  const [classes, setclasses] = useState([])
  const [flights, setflights] = useState(JSON.parse(localStorage.getItem('flightss')) || [])
  const email = localStorage.getItem("email");
  const [isloading, setisloading] = useState(false)
  const [buttondisabled, setbuttondisabled] = useState(false)
  const booked = { from, to, dates, passenger, classes }
  const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/bookflight"
  const token = localStorage.getItem("token")
  const loc = {
    to: to,
    from: from,
    classes: classes
  }
  useEffect(() => {
    const inputFrom = from.charAt(0).toUpperCase() + from.slice(1);
    const inputTo = to.charAt(0).toUpperCase() + to.slice(1);
    setfrom(inputFrom)
    // console.log(from);
    setto(inputTo)
    // console.log(to);
  }, [from, to])

  const post = async () => {
    setbuttondisabled(true)
    const dateObject = new Date(dates);
    const timestamp = dateObject.getTime();

    if (from == "" || to == "" || dates == "" || passenger == "" || classes == "") {
      toast.error('Fill all inputs')

    } else if (timestamp < Date.now()) {
      toast.error('Cant choose the past')
    }
    else {
      toast.success('my nigga lets go there')

      try {
        setisloading(true)
        console.log(booked);
        console.log(token, "testRam");
        const response = await axios.post(
          endpoint,
          { from, to, dates, passenger, classes },
          {
            headers: {
              "Authorization": `bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        ).then((response)=>{
          console.log(response)
          setisloading(false)
          toast.success(response.message)
          setTimeout(() => {

            navigate(`/flightdetails/${loc.to}/${loc.from}/${loc.classes}`)
          }, 3000);
        })
      } catch (error) {
        console.log(error)
        setisloading(false)
      }

    }
  }
  useEffect(() => {
    localStorage.setItem('flightss', JSON.stringify(flights))
    console.log(flights);
  }, [flights])
  const [homd, sethomd] = useState(true)
  const [flightpage, setflightpage] = useState(false)
  const [hotelpage, sethotelpage] = useState(true)
  const [vacationpage, setvacationpage] = useState(true)
  const first = () => {
    { homd ? sethomd(false) : sethomd(true) }
    navigate('/home')
  }
  const second = () => {
    { flightpage ? setflightpage(true) : setflightpage(false) }
    navigate('/book')
  }
  const third = () => {
    { hotelpage ? sethotelpage(false) : sethotelpage(true) }
    // navigate('/')
  }
  const fourth = () => {
    { vacationpage ? setvacationpage(false) : setvacationpage(true) }
    // navigate('/')
  }

  return (
    <>
      <div className="book-flight">
        <div className='thirdpage-one'>
          <p className='book-p text-center'>Book flight</p>
          <div className='div-cir'>
            <div className='divss'></div>
          </div>
          <div className='flight-div'>
            <div className='btn-flights'>
              <div className='btn-bgd'>
                <button className='bgd-btn'>
                  <p className='bdg-p'>ROUND TRIP</p>
                </button>
              </div>
              <div className='btn-bgd1'>
                <button className='bdg-btn1'>
                  <p className='bdg-p1'>ONE WAY</p>
                </button>
              </div>
              <div className='btn-bgd2'>
                <button className='bdg-btn2'>
                  <p className='bdg-p2'>MULTI-CITY</p>
                </button>
              </div>
            </div>
            <div className='booking-div'>
              <div className='frm-div'>
                <div>
                  <img src={plane} alt="" />
                </div>
                <div>
                  <div>From</div>
                  <input type="text" placeholder='Enter City' className='inp-frm' onChange={((e) => setfrom(e.target.value))} />
                </div>
              </div>
              <div className='frm-div'>
                <div>
                  <img src={plane} alt="" />
                </div>
                <div>
                  <div>To</div>
                  <input type="text" placeholder='Enter City' className='inp-frm' onChange={((e) => setto(e.target.value))} />
                </div>
              </div>
              <div className='frm-div'>
                <div>
                  <img src={plane} alt="" />
                </div>
                <div>
                  <input type="date" placeholder='Date' className='inp-frm' onChange={((e) => setdates(e.target.value))} />
                </div>
              </div>
              <div className='frm-div'>
                <div>
                  <select onChange={((e) => setpassenger(e.target.value))}>
                    <option hidden value="">Passenger</option>
                    <option value="1 Passenger">1 person</option>
                    <option value="2 Passenger">2 Passenger</option>
                    <option value="1 Passenger">3 Passenger</option>
                  </select>
                </div>
                <div>
                  <select onChange={((e) => setclasses(e.target.value))}>
                    <option hidden value="">Class</option>
                    <option value="First Class">First Class</option>
                    <option value="Business Class">Business Class</option>
                    <option value="Economy Class">Economy Class</option>
                  </select>
                </div>
              </div>
              <div className='flights-btns'>
                <div className='flight-btn'>
                  <button className="flight-btn1" type='button' onClick={post} disable={buttondisabled}>
                    <div className='con-btn'>
                      <div className='don'>{isloading ? "loading..." : "Done"}</div>
                      <img src={vector} alt="" />
                      <img className='plane-lg' src={plane1} alt="" />
                    </div>
                  </button>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
          <div className='bottom-div d-flex text-center w-100'>
            <button onClick={first} className='bottom-hold'>
              <img src={homd ? hom : home} alt="" />
            </button>
            <button onClick={second} className='bottom-hold'>
              <img src={flightpage ? plan : plane} alt="" />
            </button>
            <button onClick={third} className='bottom-hold'>
              <img src={hotelpage ? hote : hotel} alt="" />
            </button>
            <button onClick={fourth} className='bottom-hold'>
              <img src={vacationpage ? vacatio : vacation1} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookflight