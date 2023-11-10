import React from 'react'
import onboard1 from '../Images/air1.png'
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Props1 from './Props1';
import Props2 from './Props2';
import Props3 from './Props3';
const Onboarding1 = () => {
    // const navigate = useNavigate()
    // setTimeout(() => {
    //     navigate('/onboard2')
    // }, 3000);
    const percentage = 20;
    const bb = '#4612B6'
    return (
        <>
            <div className='container-fluid secondpage'>
                <div className='text-center  m-auto'><img className='onb-plane img-fluid' src={onboard1} alt="" /></div>
                <p className='onb1-txt'>Travel the world</p>
                <p className='onb1-txt1'>Get different varieties of flight deals to travel all over the globe at cheap prices.</p>
                <div className='text-center div-holder'>
                    <Props3/>
                    <div className='divp2'>
                        <Props1 next='div2'/>
                    </div>
                    <div className='divp2'>
                        <Props1 next='div2'/>
                    </div>
                </div>
                <div style={{ width: 200, height: 200, position: 'relative' }}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        counterClockwise={true}
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
        </>
    )
}

export default Onboarding1