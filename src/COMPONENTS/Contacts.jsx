import React, { useState, useEffect, useRef } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import air from '../Images/pic.jfif'
import axios from 'axios'
import Props4 from './Props4'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import {MdOutlineModeEdit} from 'react-icons/md'
import { IoPersonCircleSharp } from "react-icons/io5";

const Contacts = () => {
    const navigate = useNavigate()
    const [name, setname] = useState('')
    const [address, setaddress] = useState('')
    const [passport, setpassport] = useState('')
    const [dob, setdob] = useState('')
    const [country, setcountry] = useState('')
    const [_id, set_id] = useState('')
    const [selectedimage, setselectedimage] = useState('')
    const [profiledefault, setprofiledefault] = useState(false)
    // console.log(name,address,passport,dob,country);
    const token = localStorage.token
    const fileInputRef = useRef(null)

    const endpoints = "https://airtaxy-app-backend.onrender.com/airtaxy/getuser"
    const endpoint = "https://airtaxy-app-backend.onrender.com/airtaxy/personalinformation"

    const handleimagechange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setselectedimage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

        const handleEditIcon = ()=>{
            fileInputRef.current.click()
        }
    useEffect(() => {
        axios.get(endpoints).then((response) => {
            console.log(response.data.get._id);
            set_id(response.data.get._id)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const confirm = () => {
        console.log(token);
        console.log(selectedimage);
        axios.post(endpoint,
            { selectedimage, name, address, passport, dob, country, _id },
            {
                headers: {
                    "Authorization": `bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        ).then((response) => {
            console.log(response);
            navigate('/payment')
        })
    }

    return (
        <>
            <div className='contact'>
                <div className='thirdpage-one'>
                    <div className='d-flex seat-up'>
                        <div className='con-bck ms-5 mt-1'>
                            <div className='con-bck1'>
                                <div className='con-bck2'>
                                    <MdArrowBackIos />
                                </div>
                            </div>
                        </div>
                        <div className='flight-d mx-auto d-flex align-items-center'>Personal info</div>
                    </div>
                    <div className='p-4'>
                        {/* <div className='d-flex align-items-center justify-content-center mt-4'><img className='air' src={air} alt="" /></div> */}
                        <div>
                            <div>
                                <div className='d-flex align-items-center justify-content-center mt-4 position-relative'>
                                    {
                                        profiledefault?
                                        <img className='air' src={selectedimage} alt="" />  :
                                        <IoPersonCircleSharp size={100}/>
                                    }
                                    <div className='position-absolute  editicon' onClick={handleEditIcon}>
                                        <MdOutlineModeEdit size={45} />
                                    </div>
                                </div>
                                <input type="file" ref={fileInputRef} accept="image/*" onChange={handleimagechange} style={{ display: 'none' }} />
                                {/* <button onClick={handleprofilechange}>
                                    save
                                </button> */}
                            </div>
                            <div className='email-div'>
                                <label className='email-con' htmlFor="">Name</label>
                                <br />
                                <div className='inputs'>
                                    <input className='input1' type="text" onChange={(e) => setname(e.target.value)} />
                                </div>
                            </div>
                            <div className='email-div'>
                                <label className='email-con' htmlFor="">Address</label>
                                <br />
                                <div className='inputs'>
                                    <input className='input1' type="text" onChange={(e) => setaddress(e.target.value)} />
                                </div>
                            </div>
                            <div className='email-div'>
                                <label className='email-con' htmlFor="">Passport</label>
                                <br />
                                <div className='inputs'>
                                    <input className='input1' type="text" onChange={(e) => setpassport(e.target.value)} />
                                </div>
                            </div>
                            <div className='email-div'>
                                <label className='email-con' htmlFor="">DOB</label>
                                <br />
                                <div className='inputs'>
                                    <input className='input1' type="date" onChange={(e) => setdob(e.target.value)} />
                                </div>
                            </div>
                            <div className='email-div'>
                                <label className='email-con' htmlFor="">Country</label>
                                <br />
                                <div className='inputs'>
                                    <input className='input1' type="text" onChange={(e) => setcountry(e.target.value)} />
                                </div>
                            </div>
                            <div className='signup-button'>
                                <Props4 gradient='Confirm' gradient1='signup-clk' pass='Submit' onClick={confirm} />
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts