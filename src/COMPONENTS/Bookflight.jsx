import React,{useState} from 'react'
import plane from '../Images/plane 2.png'
import {AiFillCaretDown} from 'react-icons/ai'
import vector from '../Images/Vector 1.png'
import plane1 from '../Images/plane.png'

const Bookflight = () => {
  const [drop, setdrop] = useState(false)
  const [drop1, setdrop1] = useState(false)
  const [first, setfirst] = useState('ooo')
  const dropdown = ()=>{
    setdrop(!drop)
  }
  const dropdown1 = ()=>{
    setdrop1(!drop1)
  }
  return (
    <>
        <div className="book-flight">
          <p className='book-p text-center'>Book flight</p>
          <div className='div-cir'>
            <div className='divss'></div>
          </div>
          <div className='flight-div'>
                <div className='btn-flights'>
                  <div className='btn-bgd'>
                    <button className='bgd-btn'>
                      <p className='bdg-p'>ROUND TRIP</p>
                    </button>
                  </div>
                  <div className='btn-bgd1'>
                    <button className='bdg-btn1'>
                      <p className='bdg-p1'>ONE WAY</p>
                    </button>
                  </div>
                  <div className='btn-bgd2'>
                    <button className='bdg-btn2'>
                      <p className='bdg-p2'>MULTI-CITY</p>
                    </button>
                  </div>
                </div>
                <div className='booking-div'>
                  <div className='frm-div'>
                    <div>
                      <img src={plane} alt="" />
                    </div>
                    <div>
                      <div>From</div>
                      <input type="text" placeholder='Enter City' className='inp-frm' />
                    </div>
                  </div>
                  <div className='frm-div'>
                    <div>
                      <img src={plane} alt="" />
                    </div>
                    <div>
                      <div>To</div>
                      <input type="text" placeholder='Enter City' className='inp-frm' />
                    </div>
                  </div>
                  <div className='frm-div'>
                    <div>
                      <img src={plane} alt="" />
                    </div>
                    <div>
                      <input type="date" placeholder='Date' className='inp-frm' />
                    </div>
                  </div>
                  <div className='frm-div'>
                    <div>
                      {/* <div className='d-flex align-items-center justify-content-center gap-5'>
                        <div onClick={dropdown}><AiFillCaretDown/></div>
                      </div> */}
                        <div>
                          <select>
                            <option hidden value="">Passenger</option>
                            <option value="1 Passenger">1 person</option>
                            <option value="2 Passenger">2 Passenger</option>
                            <option value="1 Passenger">3 Passenger</option>
                          </select>
                        </div>
                    </div>
                    <div>
                      {/* <div className='d-flex align-items-center justify-content-center gap-5'>
                        <div className='pass'>Class</div>
                        <div onClick={dropdown1}><AiFillCaretDown/></div>
                      </div> */}
                        <div>
                          <select>
                              <option hidden value="">Class</option>
                              <option value="First Class">First Class</option>
                              <option value="Business Class">Business Class</option>
                              <option value="Economy Class">Economy Class</option>
                            </select>
                        </div>
                    </div>
                  </div>
                  <div className='flight-btn'>
                    <button className="flight-btn1" type='button'>
                      <div className='con-btn'>
                        <div>Done</div>
                          <img src={vector} alt="" />
                          <img src={plane1} alt="" />
                        </div>
                    </button>
                  </div>
                </div>
          </div>
        </div>
    </>
  )
}

export default Bookflight