import React from 'react'
import onboard4 from '../Images/air2.png'
import Props4 from './Props4'
import { Link, useNavigate } from 'react-router-dom'

const Onboarding4 = () => {
    const navigate = useNavigate()
    const login =()=>{
        navigate('/login')
    }
  return (
    <>
       <div className="container-fluid fifthpage">
            <div className='text-center m-auto' ><img className='onb-plane img-fluid mt-5' src={onboard4} alt="" /></div>
            <p className='onb4-txt'>Live life with no excuses, travel with no regrets.</p>
            <div className='onb4-holder'>
                <div className='text-center d-flex justify-content-center' onClick={login}>
                    <Props4 gradient='Continue' gradient1='onb4-button'/>
                </div>
                <div className='text-center mt-1'><Link to='/signup' className='signup-link'>Sign Up</Link></div>
                <div className='text-center mt-1'><Link to='/login' className='login-link'>Already have an Account</Link></div>
            </div>

        </div> 
    </>
  )
}

export default Onboarding4