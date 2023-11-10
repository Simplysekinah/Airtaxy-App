import React from 'react'
import vector from '../Images/Vector 1.png'
import plane from '../Images/plane.png'

const Props4 = ({gradient,gradient1,onClick,pass}) => {
  return (
    <>
        <button className={gradient1} onClick={onClick} type={pass}>{gradient}
                {/* Continue */}
                <img src={vector} alt="" />
                <img src={plane} alt="" />
            </button>
    </>
  )
}

export default Props4