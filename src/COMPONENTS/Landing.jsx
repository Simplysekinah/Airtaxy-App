import React, { useEffect } from 'react'
import logo from '../Images/Logo.png'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate()
    useEffect(()=>{
    setTimeout(() => {
        navigate('/onboard1')
    }, 3000);
    }, [])
    return (
        <>
            <div className='container-fluid firstpage d-flex justify-content-center align-items-center'>
                <div className='text-center'><img src={logo} alt="" /></div>       
            </div>
        </>
    )
}

export default Landing