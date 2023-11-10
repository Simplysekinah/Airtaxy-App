import React, { useState, useEffect } from 'react'
import logo from '../Images/Logo.png'
import Props4 from './Props4'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [user, setuser] = useState('')
    const navigate = useNavigate()
    const endpoint = "http://localhost:5002/airtaxy/signup"

   



    const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email("must be a valid email").required("email is required"),
            password: yup.string().min(6, "password is too short").required("password is required")
        }),

        onSubmit: async (values) => {
            // alert('cool')
            console.log(values)
            if (values) {
                await axios.post(endpoint, values).then((response) => {
                    console.log(response.data)
                    toast.success(response.data.message)
                   setTimeout(() => {
                     navigate('/login')
                   }, 3000);
                }).catch((error) => {
                    console.log(error)
                    toast.error(error.response.data.message)
                })
            }
        }
    })
   
    return (
        <>
            <div className="container-fluid">
                <div className='signup'>
                    <div className='sign-up w-100 d-flex justify-content-center align-items-center'>
                        <img className='img-fluid text-center' src={logo} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <div className='container sign-down'>
                    <p className='sign1'>Sign up</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='email-div'>
                                <label className='email' htmlFor="">Email</label>
                                <br />
                                <div className='inputs'>
                                    <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="text" name='email' onChange={handleChange} onBlur={handleBlur} />
                                    {errors.email && touched.email ? (
                                        <small className='text-light'>{errors.email}</small>
                                    ) : null}
                                </div>
                            </div>
                            <div className='email-div'>
                                <label className='email' htmlFor="">Password</label>
                                <br />
                                <div className='inputs'>
                                    <input className={errors.password ? 'input1 is-invalid form-control' : 'input1'} type="text" name='password' onChange={handleChange} onBlur={handleBlur} />
                                    {errors.password && touched.password ? (
                                        <small className='text-danger'>{errors.password}</small>
                                    ) : null}
                                </div>
                            </div>
                            <div className='signup-button'>
                                <Props4 gradient='Sign up' gradient1='signup-clk'   pass='Submit' />
                               
                            </div>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup