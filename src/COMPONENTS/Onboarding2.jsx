import React from 'react'
import onboard2 from '../Images/vacation.png'
import { useNavigate } from 'react-router-dom';
import Props2 from './Props2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Props3 from './Props3';
import Props1 from './Props1';

const Onboarding2 = () => {
  const navigate = useNavigate()
    setTimeout(() => {
        navigate('/onboard3')
    }, 3000);
  const percentage = 60
  return (
    <>
        <div className='thirdpage'>
            <div className='thirdpage-one'>
              <div className='text-center  m-auto'><img className='onb-plane img-fluid mt-5' src={onboard2} alt="" /></div>
              <p className='onb1-txt'>Vacation packages</p>
              <p className='onb1-txt1'>Live the dream.Our app offers great vacation packages, short trips and great experiences.</p>
              <div className='text-center div-holder'>
                      <div className='divp2'>
                          <Props1 next='div2'/>
                      </div>
                      <Props3/>
                      <div className='divp2'>
                          <Props1 next='div2'/>
                      </div>
              </div>
              <div className='onboard1-next mt-5'>
                <div style={{ width: 200, height: 200, position: 'relative' }}>
                    <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            counterClockwise={false}
                            background={false}
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0.25,

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                
                                // Text size
                                textSize: '16px',

                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: `rgba(70, 18, 182, 1, ${percentage / 100})`,
                                textColor: '#4612B6',
                                trailColor: 'rgba(11, 11, 11, 1)',
                                // backgroundColor:{default:true},
                                background: {
                                    fill: '#4612B6',
                                  },
                            })}
                        />;
                      <Props2/>
              </div>
            </div>
            </div>
        </div> 
    </>
  )
}

export default Onboarding2