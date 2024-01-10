import React, { useState, useEffect } from 'react'
import plane from '../Images/plane 2.png'
import { AiFillCaretDown } from 'react-icons/ai'
import vector from '../Images/Vector 1.png'
import plane1 from '../Images/plane.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Bookflight = () => {
  const navigate = useNavigate()
  const [from, setfrom] = useState('')
  const [to, setto] = useState('')
  const [dates, setdates] = useState('')
  const [passenger, setpassenger] = useState('')
  const [classes, setclasses] = useState([])
  const [flights, setflights] = useState(JSON.parse(localStorage.getItem('flightss')) || [])
  const email = localStorage.getItem("email");
  const booked = { from, to, dates, passenger, classes }
  const endpoint = "http://localhost:5002/airtaxy/bookflight"
  const token = localStorage.getItem("token")
  const loc = {
    to: to,
    from: from,
    classes: classes
  }

  const post = async () => {
    const inputFrom = from.charAt(0).toUpperCase() + from.slice(1);
    const inputTo = to.charAt(0).toUpperCase() + to.slice(1);
    setfrom(inputFrom)
    setto(inputTo)
    if (from !== 'Lagos' ) {
        toast.error('you can only book flight from lagos')
    } else if (to !== 'Abuja'&&
              to !== 'Dubai'&&
              to !== 'Canada'&&
              to !== 'United Kingdom'&&
              to !== 'United State of America'){
      toast.error('you can only book flight to Abuja, Dubai, Canada, United Kingdom, United State of America')
    }else if (from == "" || to == "" || dates == "" || passenger == "" || classes == "" ) {
      toast.error('Fill all inputs')
    }else{
      try {
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
        )
        console.log(response)
        toast.success(response.message)
        navigate(`/flightdetails/${loc.to}/${loc.from}/${loc.classes}`)
      } catch (error) {
        console.log(error)
      }
    }

  }
  useEffect(() => {
    localStorage.setItem('flightss', JSON.stringify(flights))
  }, [flights])

  return (
    <>
      <div className="book-flight">
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
                <button className="flight-btn1" type='button' onClick={post}>
                  <div className='con-btn'>
                    <div className='don'>Done</div>
                    <img src={vector} alt="" />
                    <img className='plane-lg' src={plane1} alt="" />
                  </div>
                </button>
              </div>
            </div>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookflight