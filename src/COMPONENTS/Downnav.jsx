import React from 'react'


const Downnav = () => {
    return (
        <div>
            <div className='bottom-div'>
                <button onClick={first} className='bottom-hold'>
                    <img src={homd ? hom : home} alt="" />
                </button>
                <button onClick={second} className='bottom-hold'>
                    <img src={flightpage ? plan : plane} alt="" />
                </button>
                <button onClick={third} className='bottom-hold'>
                    <img src={hotelpage ? hote : hotel} alt="" />
                </button>
                <button onClick={fourth} className='bottom-hold'>
                    <img src={vacationpage ? vacatio : vacation1} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Downnav