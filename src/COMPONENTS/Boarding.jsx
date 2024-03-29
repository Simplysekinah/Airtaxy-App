import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdArrowBackIos } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import { receipts } from './Service/Receipts'
import Props4 from './Props4'
import { FaUserCircle } from "react-icons/fa";
import hom from '../Images/hom.png'
import home from '../Images/home.png'
import plan from '../Images/plan.png'
import plane from '../Images/plane1.png'
import hote from '../Images/hote.png'
import hotel from '../Images/hotel.png'
import vacatio from '../Images/vacatio.png'
import vacation1 from '../Images/vacation1.png'
import { useNavigate } from 'react-router-dom'

const Boarding = () => {
  const navigate = useNavigate()
  const [qrCodeImage, setqrCodeImage] = useState('')
  const [data, setdata] = useState('')
  const token = localStorage.token
  console.log(token);
  const { allBooked, isBooking, bookError } = useSelector((state) => state.book)
  console.log(allBooked);
  const { Bookingflight, Booked, Bookingerror } = useSelector((state) => state.Check)
  console.log(Booked);
  const dispatch = useDispatch()
  useEffect(() => {
    receipts(dispatch)
    const CodeImage = JSON.parse(localStorage.getItem('scancode')) || ''
    setqrCodeImage(CodeImage)
  }, [])

  console.log(qrCodeImage);

  const handleprint = () => {
    const All = document.getElementById('print-content')
    if (All) {
      const every = document.body.innerHTML
      document.body.innerHTML = All.innerHTML
      window.print()
      document.body.innerHTML = every
    }

  }
  const [homd, sethomd] = useState(false)
  const [flightpage, setflightpage] = useState(true)
  const [hotelpage, sethotelpage] = useState(true)
  const [vacationpage, setvacationpage] = useState(true)
  const first = () => {
    { homd ? sethomd(true) : sethomd(false) }
    navigate('/home')
  }
  const second = () => {
    { flightpage ? setflightpage(false) : setflightpage(true) }
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
    <div>
      <div className='d-flex seat-up'>
        <div className='con-bck ms-5 mt-1'>
          <div className='con-bck1'>
            <div className='con-bck2'>
              <MdArrowBackIos />
            </div>
          </div>
        </div>
        <div className='flight-d mx-auto d-flex align-items-center'>Payment</div>
      </div>
      <div>
        <div className='' id='print-content' >
          <div className='text-center align-items-center mt-2'>
            <div>
              <FaUserCircle className='profile' />
            </div>
            <div>{allBooked.email}</div>
          </div>
          <div className='arrow mt-4'>
            <div className='from text-dark'>{allBooked.from}</div>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='sm-circle'></div>
              <div className='sm-long'></div>
              <div className='sm-circle'></div>
            </div>
            <div className='to text-dark'>{allBooked.to}</div>
          </div>
          {/* <div className='clas1'>
                <div  className='d-flex justify-content-center align-items-center'>
                  <div className='clas text-center d-flex justify-content-center align-items-center'>{allBooked.classes}</div>
                </div>
              </div> */}
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
          <div className='d-flex border border-black p-3 justify-content-evenly align-items-center clas fs-3 text-black'>
            <div>
              <p>Seat</p>
              <div>{allBooked?.seatNumber?.number}</div>
            </div>
            <div>
              <p>Class</p>
              <div>{allBooked.classes}</div>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-2'>
            <img className='w-50 h-50 ' src={qrCodeImage && qrCodeImage} alt="qrcode" />
          </div>
        </div>
        <div className='mt-1'>
          <Props4 gradient='Download' gradient1='signup-clk mt-5' pass='Submit' onClick={handleprint} />
        </div>
        <ToastContainer />
      </div>
      <div className='bottom-div'>
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
  )
}

export default Boarding