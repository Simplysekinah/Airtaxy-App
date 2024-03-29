import React,{useState} from 'react'
import logo from '../Images/Logo.png'
import Props4 from './Props4'
import { useFormik } from 'formik'
import padlock from '../Images/padlock.png'
import axios from 'axios'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const getuser = JSON.parse(localStorage.getItem("userinfo"))
    const [buttondisabled, setbuttondisabled] = useState(false)
    const [isloading, setisloading] = useState(false)
    const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/forget"
    const navigate = useNavigate()

    const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: yup.object().shape({
            email: yup.string().email("must be a valid email").required("email is required"),
        }),

        onSubmit: async (values) => {
            console.log(values)
            setbuttondisabled(true)
            setisloading(true)
            if (values) {
                axios.post(endpoint, values).then((response) => {
                    console.log(values);
                    localStorage.setItem('email', values.email)
                    console.log(response)
                    toast.success(response.data.message)
                    const generatedOtp = response.data.OTP
                    localStorage.setItem('otp', generatedOtp)
                    setisloading(false)
                    //     localStorage.setItem("userinfo",JSON.stringify(response.data.user) )
                    setTimeout(() => {
                        navigate('/verify')
                    }, 3000);
                }).catch((error) => {
                    console.log(error)
                    setisloading(false)
                    toast.error(error.response.data.message)
                })
            }
        }
    })

    return (
        <>
            <div className="container forget-pass">
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
                        <p className='forget-p'>Forget Password</p>
                        <div className='pad-holder text-center'>
                            <img src={padlock} alt="" />
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='email-div'>
                                <label className='email d-flex justify-content-center'>Enter Email Address</label>
                                <br />
                                <div className='inputs'>
                                    <div className="inp-holders">
                                        <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="text" name="email" onChange={handleChange} onBlur={handleBlur} />
                                    </div>
                                </div>
                            </div>
                            <Props4 gradient={isloading? "loading..." : "Send"} disable={buttondisabled} gradient1='signup-clk justify-content-center d-flex' pass='Submit' />
                            <ToastContainer />
                        </form>

                        <div className='d-flex blg justify-content-center'>
                            <div className='text-white'>Back to</div>
                            <div className='log'>Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword