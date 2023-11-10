import React from 'react'
import logo from '../Images/Logo.png'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/onboard1')
    }, 3000);
    return (
        <>
            <div className='container-fluid firstpage w-100 d-flex justify-content-center align-items-center'>
                <div className='text-center'><img src={logo} alt="" /></div>
                
            </div>
        </>
    )
}

export default Landing