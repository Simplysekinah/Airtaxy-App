import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import Props4 from './Props4'
import padlock from '../Images/padlock.png'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
    const [password, setpassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [buttondisabled, setbuttondisabled] = useState(false)
    const [isloading, setisloading] = useState(false)
    const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/reset"
    const navigate = useNavigate()
    const [showing, setShowing] = useState(false);
    const show = () => {
        { showing ? setShowing(false) : setShowing(true) }
    }

    const details = {
        password,
        Confirm
    }
    const reset = () => {
        console.log(details);
        if (password !== Confirm) {
            toast.error('password does not match')
            return
        }
        else {
            const OTP = localStorage.getItem("otp");
            const email = localStorage.getItem("email");
            const obj = {
                OTP,
                email,
                password
            }
            axios.post(endpoint, obj).then((response) => {
                console.log(response)
                toast.success(response.data.message)
                setbuttondisabled(true)
                setisloading(true)
                setTimeout(() => {
                    navigate('/login')
                }, 3000);
            }).catch((error) => {
                console.log(error)
                setisloading(false)
                toast.error(error.response.data.message)
            })
        }

    }
    const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: yup.object().shape({
            password: yup.string().min(6, "password is too short").required("password is required")
        }),

        onSubmit: async (values) => {
            console.log(values)
            // const {email,password}=  values 
            // const signedupUser = signed.find(e=>e.email === email && e.password === password)
            // console.log(signedupUser)
            // if (values) {
            //      axios.post(endpoint, values).then((response) => {
            //         console.log(values);
            //         console.log(response)
            //         toast.success(response.data.message)
            //         const generatedOtp = response.data.OTP
            //         localStorage.setItem('otp', generatedOtp)
            //     //     localStorage.setItem("userinfo",JSON.stringify(response.data.user) )
            //        setTimeout(() => {
            //         navigate('/verify')
            //        }, 3000);
            //     }).catch((error) => {
            //         console.log(error)
            //         toast.error(error.response.data.message)
            //     })
            // }
        }
    })
    return (
        <>
            <div className="container-fluid forget-pass">
                <div className='thirdpage-one'>
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
                        <p className='forget-p'>Reset Password</p>
                        <div className='pad-holder text-center'>
                            {/* <img src={padlock} alt="" /> */}
                        </div>
                        <div className='email-div'>
                            <label className='email d-flex justify-content-center'>Enter New Password</label>
                            <br />
                            <div className='inputs'>
                                <div className='inp-holders'>
                                    <input className={errors.password ? 'input1 form-control' : 'input1'} type={showing ? "password" : "text"} name='password' onChange={((e) => setpassword(e.target.value))} onBlur={handleBlur} />
                                    <button className='show-pass' type='button' onClick={show}>{showing ? <FaEyeSlash /> : <FaEye />}</button>
                                    {/* <button className='show-pass' type='button' onClick={() => setShowing(!showing)}>{showing ? <FaEyeSlash /> : <FaEye />}</button> */}

                                </div>

                            </div>
                            {errors.password && touched.password ? (
                                <small className='text-danger d-flex justify-content-center'>{errors.password}</small>
                            ) : null}
                        </div>
                        <div className='email-div'>
                            <label className='email d-flex justify-content-center'>Confirm Password</label>
                            <br />
                            <div className='inputs'>
                                <div className='inp-holders'>
                                    <input className={errors.password ? 'input1 form-control' : 'input1'} type={showing ? "password" : "text"} name='password' onChange={((e) => setConfirm(e.target.value))} onBlur={handleBlur} />
                                    <button className='show-pass' type='button' onClick={show}>{showing ? <FaEyeSlash /> : <FaEye />}</button>
                                    {/* <button className='show-pass' type='button' onClick={() => setShowing(!showing)}>{showing ? <FaEyeSlash /> : <FaEye />}</button> */}
                                </div>
                            </div>
                            {errors.password && touched.password ? (
                                <small className='text-danger d-flex justify-content-center'>{errors.password}</small>
                            ) : null}
                        </div>
                        <Props4 gradient={isloading? "loading..." : "Reset"} disable={buttondisabled} onClick={reset} gradient1='signup-clk justify-content-center d-flex' />
                        <ToastContainer />
                        <div className='d-flex blg justify-content-center'>
                            <div className='text-white'>Back to</div>
                            <div className='log'>Login</div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ResetPassword