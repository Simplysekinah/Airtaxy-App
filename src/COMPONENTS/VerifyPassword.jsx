import React, { useState, useEffect } from 'react'
import logo from '../Images/Logo.png'
import Props4 from './Props4'
import { useNavigate } from 'react-router-dom'
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const VerifyPassword = () => {
    const endpoint = "http://localhost:5002/airtaxy/verify"
    const navigate = useNavigate()
    const [otp, setotp] = useState(['', '', '', ''])
    const inputRef = useRef([null, null, null, null])
    const generatedOtp =    localStorage.getItem('otp' || '')

    useEffect(() => {
        inputRef.current[0].focus();
      }, []);
    
      const HandleInputChange = (index, event) => {
        const value = event.target.value;
        const UpdatedOtp = [...otp];
        UpdatedOtp[index] = value;
        setotp(UpdatedOtp);
    
        if (value !== '' && index < otp.length - 1) {
          inputRef.current[index + 1].focus();
        }
      };


      const verify = ()=>{
         const fullOtp = otp.join("")
         console.log(fullOtp);
         if (fullOtp === generatedOtp) {
            navigate('/reset')
         }
         else{
            toast.error('bad')
         }
      }

    return (
        <>
            <div className="container-fluid forget-pass">
                <div className='container-fluid forget-up w-100 '>
                    <div className='forget-bck d-flex justify-content-center align-items-center'>
                        <div className='forget-in'>

                        </div>
                    </div>
                    <div>
                        <img className='img-fluid text-center' src={logo} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <div className="container sign-down">
                    <p className='forget-p'>Verification</p>
                    <div className='pad-holder text-center'>
                        {/* <img src={padlock} alt="" /> */}
                    </div>
                    <div className='inps-holder'>
                        {otp && otp.map((digit, index) => (
                            <div className='inps-circle' key={index}>
                                <input
                                    value={digit}
                                    onChange={(event) => HandleInputChange(index, event)}
                                    ref={(el) => inputRef.current[index] = el}
                                    maxLength={1}
                                    type="text"
                                    className='inp'
                                />
                            </div>
                        ))}
                    </div>
                    <div className='d-flex blg justify-content-center'>
                        <div className='text-white'>If you didn't receive a code!</div>
                        <div className='log'>Resend it</div>
                    </div>
                    <Props4 onClick={verify} gradient='Verify' gradient1='signup-clk justify-content-center d-flex' />
                    <div className='d-flex blg justify-content-center'>
                        <div className='text-white'>Back to</div>
                        <div className='log'>Login</div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default VerifyPassword