import React from 'react'
import {MdArrowBackIos} from 'react-icons/md'
import logo from '../Images/Logo.png'

const ChooseSeat = () => {
  return (
    <>
        <div>
            <div className='d-flex  seat-up'>
                    <div className='con-bck ms-5 mt-1'>
                        <div className='con-bck1'>
                            <div className='con-bck2'>
                                <MdArrowBackIos/>
                            </div>
                        </div>
                    </div>
                    <div className='flight-d mx-auto d-flex align-items-center'>Choose Seat</div>
            </div>
            <div>
              <div className='seat'>
                <div className='div-join'>
                  <div className='div-one'>
                    <button className='one'>1</button>
                    <button className='one'>2</button>
                    <button className='one'>3</button>
                  </div>
                  <div className='div-two'>
                    <button className='one'>4</button>
                    <button className='one'>5</button>
                  </div>
                  <div className='div-three'>
                    <button className='one'>6</button>
                    <button className='one'>7</button>
                    <button className='one'>8</button>
                  </div>
                  <div className='div-four'>
                    <button className='one'>9</button>
                    <button className='one'>10</button>
                  </div>
                </div>
              </div>
            </div>
        </div>  
    </>
  )
}

export default ChooseSeat