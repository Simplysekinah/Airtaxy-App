import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {MdArrowBackIos} from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import { receipts } from './Service/Receipts'

const Boarding = () => {
    const token = localStorage.token
    console.log(token);
  const { allBooked, isBooking, bookError } = useSelector((state) => state.book)
  console.log(allBooked);
  const{ Bookingflight, Booked, Bookingerror}= useSelector((state) => state.Check)
  console.log(Booked);
  const dispatch = useDispatch()
  useEffect(() => {
    receipts(dispatch)
  }, [])
  return (
    <div>
       <div className='d-flex seat-up'>
          <div className='con-bck ms-5 mt-1'>
          <div className='con-bck1'>
            <div className='con-bck2'>
              <MdArrowBackIos/>
            </div>
          </div>
          </div>
          <div className='flight-d mx-auto d-flex align-items-center'>Payment</div>
       </div>
       <div>
          <div className='' >
              <div className='arrow'>
                <div className='from text-dark'>{allBooked.from}</div>
                <div className='d-flex align-items-center justify-content-center'>
                <div className='sm-circle'></div>
                <div className='sm-long'></div>
                  <div className='sm-circle'></div>
                </div>
                <div className='to text-dark'>{allBooked.to}</div>
              </div>
              <div className='clas1'>
                <div  className='d-flex justify-content-center align-items-center'>
                  <div className='clas text-center d-flex justify-content-center align-items-center'>{allBooked.classes}</div>
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
              <div className='d-flex'>
                {/* <button onClick={()=>cancel(allBooked)}>Cancel</button> */}
                <button onClick={Download}>Confirm</button>
              </div>
              <ToastContainer/>
            </div>
          </div>
    </div>
  )
}

export default Boarding