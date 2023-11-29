import React from 'react'
import {MdArrowBackIos} from 'react-icons/md'
import air from '../Images/pic.jfif'
import axios from 'axios'
import Props4 from './Props4'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
    const endpoint = "http://localhost:5002/airtaxy/signin"
    const navigate=useNavigate()

    const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email("must be a valid email").required("email is required"),
            password: yup.string().min(6, "password is too short").required("password is required")
        }),

        onSubmit: async(values) => {
            if (values) {
                 axios.post(endpoint, values).then((response) => {
                    console.log(values);
                    console.log(response)
                    if(response.data.message){
                        localStorage.token = response.data.token
                        toast.success(response.data.message)
                        localStorage.setItem("userinfo",JSON.stringify(response.data.user) )
                        setTimeout(() => {
                            navigate('/home')
                        }, 3000);
                    }
                }).catch((error) => {
                    console.log(error)
                    toast.error(error.response.data.message)
                })
            }
        }
    })

    const forget=()=>{
        navigate('/forgetpassword')
    }
  return (
    <>
       <div>
            <div className='d-flex seat-up'>
                <div className='con-bck ms-5 mt-1'>
                            <div className='con-bck1'>
                                <div className='con-bck2'>
                                    <MdArrowBackIos/>
                                </div>
                            </div>
                </div>
                <div className='flight-d mx-auto d-flex align-items-center'>Personal info</div>
            </div>
            <div>
                <div className='d-flex align-items-center justify-content-center mt-4'><img className='air' src={air} alt="" /></div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='email-div'>
                            <label className='email-con' htmlFor="">Name</label>
                            <br />
                            <div className='inputs'>
                                <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="text" name="email" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='email-div'>
                            <label className='email-con' htmlFor="">Address</label>
                            <br />
                            <div className='inputs'>
                                <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="text" name="email" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='email-div'>
                            <label className='email-con' htmlFor="">Passport</label>
                            <br />
                            <div className='inputs'>
                                <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="text" name="password" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='email-div'>
                            <label className='email-con' htmlFor="">DOB</label>
                            <br />
                            <div className='inputs'>
                                <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="date" name="password" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='email-div'>
                            <label className='email-con' htmlFor="">Country</label>
                            <br />
                            <div className='inputs'>
                                <input className={errors.email && touched.email ? 'input1 is-invalid form-control' : 'input1'} type="text" name="password" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='signup-button'>
                            <Props4 gradient='Login up' gradient1='signup-clk' pass='Submit'/>
                        </div>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div> 
    </>
  )
}

export default Contacts