import React from 'react'
import tempOne from '../imgs/Frame 74.png'
import tempTwo from '../imgs/Frame 75.png'
import tempThree from '../imgs/Frame 76.png'
import tempFour from '../imgs/Frame 72.png'
function Producttemplate() {
  return (
   <div className='tempmain'>
   <div className='tempinner d-flex justify-content-around'>

        <div className='innerone d-flex flex-column'>
            <img src={tempOne} alt="..." />
            <img src={tempTwo} alt="..." />
            <img src={tempThree} alt="..." />
        </div>
        <div className='innertwo'>
        <img src={tempFour} alt="..." />
        </div>
        <div className='innerthree'>
            <h1> PINK TEXTURED SAREE</h1>
            <p>
                INR 1399
            </p>
            <p>
                Inclusive of all taxes
            </p>
        </div>
   </div>

   </div>
  )
}
export default Producttemplate