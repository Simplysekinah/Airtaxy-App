import React, { useState, useEffect } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import logo from '../Images/Logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChooseSeat = () => {
  const [code, setcode] = useState('')
  const [click, setclick] = useState(false)
  const [_id, set_id] = useState('')
  const [isloading, setisloading] = useState(false)
  const [buttondisabled, setbuttondisabled] = useState(false)
  console.log(code);
  const seatnumber = code
  console.log(seatnumber);
  const token = localStorage.token
  const navigate = useNavigate()
  // console.log(token);
  const endpoints = "https://airtaxy-app-backend.onrender.com/airtaxy/seatnumber"
  const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/getflight"

  useEffect(() => {
    axios.get(endpoint).then((response) => {
      console.log(response.data.get._id);
      set_id(response.data.get._id)
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  console.log(_id);
  const handleclick = (e) => {
    console.log(token);
    setbuttondisabled(true)
    setisloading(true)
    console.log(e.target.value);
    let value = e.target.value
    if (value == code) {
      setclick(true);
    }
    if(code == ''){
      toast.success('Pick your seatnumber')
    }else{

      axios.post(endpoints, { seatnumber, _id }, {
        headers: {
          "Authorization": `bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then((response) => {
        console.log(response);
        setisloading(false)
        setTimeout(() => {
          toast.success(response.message)
          navigate('/contact')
        }, 3000);
      }).catch((error) => {
        console.log(error);
        setisloading(false)
        toast.error(error.message)
      })
    }
  }
  return (
    <>
      <div className='seat-div'>
        <div className='thirdpage-one'>
          <div className=' d-flex lign-items-center justify-content-around  seat-up'>
            <div className='con-bck'>
              <div className='con-bck1'>
                <div className='con-bck2'>
                  <MdArrowBackIos />
                </div>
              </div>
            </div>
            <div className='flight-d mx-auto d-flex align-items-center'>Choose Seat</div>
          </div>
          <div>
            <div className='seat'>
              <div className='div-join'>
                <div className='div-one'>
                  <button className={click ? 'one' : 'same'}
                    value={1}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    1
                  </button>
                  <button className={click ? 'one' : 'same'}
                    value={2}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    2
                  </button>
                  <button className={click ? 'one' : 'same'}
                    value={3}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    3
                  </button>
                </div>
                <div className='div-two'>
                  <button className={click ? 'one' : 'same'}
                    value={4}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    4
                  </button>
                  <button className={click ? 'one' : 'same'}
                    value={5}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    5
                  </button>
                </div>
                <div className='div-three'>
                  <button className={click ? 'one' : 'same'}
                    value={6}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    6
                  </button>
                  <button className={click ? 'one' : 'same'}
                    value={7}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    7
                  </button>
                  <button className={click ? 'one' : 'same'}
                    value={8}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    8
                  </button>
                </div>
                <div className='div-four'>
                  <button className={click ? 'one' : 'same'}
                    value={9}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    9
                  </button>
                  <button className={click ? 'one' : 'same'}
                    value={10}
                    onClick={(event) => {
                      handleclick(event)
                      setcode(event.target.value)
                      setclick(true)
                    }
                    }
                    disable={click || buttondisabled} >
                    10
                  </button>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseSeat