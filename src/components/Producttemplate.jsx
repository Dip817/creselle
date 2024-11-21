import React from 'react'
import tempOne from '../imgs/Frame 74.png'
import tempTwo from '../imgs/Frame 75.png'
import tempThree from '../imgs/Frame 76.png'
import tempFour from '../imgs/Frame 72.png'
function Producttemplate() {
    return (
        <div className='tempmain container d-flex justify-content-around'>
            <div className='tempinner d-flex justify-content-around align-items-center'>
                <div className='innerone d-flex flex-column'>
                    <img src={tempOne} alt="..." />
                    <img src={tempTwo} alt="..." />
                    <img src={tempThree} alt="..." />
                </div>
                <div className='innertwo'>
                    <img src={tempFour} alt="..." />
                </div>
            </div>
            <div className='innerthree d-flex align-self-center flex-column'>
                <h1> PINK TEXTURED SAREE</h1>
                <p>
                    INR 1399
                </p>
                <p>
                    Inclusive of all taxes
                </p>
                {/* offer section starts from here */}
                <div className='offers w-75'>
                    <i className='bx bxs-offer mx-2'></i>Get<p>
                        this for INR 989
                        Flat 10% Off your first purchase. Download the app and use
                        Code: APP10
                    </p>
                    <i className='bx bxs-offer mx-2'></i>Get<p>
                        this for INR 989
                        Flat 10% Off your first purchase. Download the app and use
                        Code: APP10
                    </p>
                    <i className='bx bxs-offer mx-2'></i>Get<p>
                        this for INR 989
                        Flat 10% Off your first purchase. Download the app and use
                        Code: APP10
                    </p>
                </div>
                {/* offer section ends her */}

                {/* product headers starts from here */}
                <div className='main-product-headers d-flex justify-content-between'>
                    <div className='size-div'>
                        <p>Select a size</p>
                        <div className='sizes d-flex justify-content-between'>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                        </div>
                    </div>
                    <div className='quanitity-div' >
                        <p>Quanitity</p>
                        <div className='quantity-div-inner d-flex justify-content-between align-items-center'>
                            <p>-</p>
                            <p>0</p>
                            <p>+</p>
                        </div>
                    </div>
                    <div className='total-div d-flex flex-column'>
                        <p>Total</p>
                        <div>
                            INR 1,299
                        </div>
                    </div>
                </div>
                {/* product headers end here */}
                <div className='actionb mt-1'>
                    <button id='addtocart' className='mb-1'>
                        <a href="/">Add to cart</a>
                    </button>
                    <button id='buynow' className='mb-1'>
                        <a href="/">Buy Now</a>
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Producttemplate