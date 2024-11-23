import React from 'react'
import tempOne from '../imgs/Frame 74.png'
import tempTwo from '../imgs/Frame 75.png'
import tempThree from '../imgs/Frame 76.png'
import tempFour from '../imgs/Frame 72.png'
function Producttemplate() {
    return (
        <>
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
                        <div className='offer-one d-flex align-items-center'>
                            <i className='bx bxs-offer mx-2'></i><p>
                                Get this for INR 98
                                Flat 10% Off your first purchase. Download the app and use
                                Code: APP10
                            </p>
                        </div>
                        <div className='offer-one d-flex align-items-center'>
                            <i className='bx bxs-offer mx-2'></i><p>
                                Get this for INR 989
                                Flat 10% Off your first purchase. Download the app and use
                                Code: APP10
                            </p>
                        </div>
                        <div className='offer-one d-flex align-items-center'>
                            <i className='bx bxs-offer mx-2'></i><p>
                                Get this for INR 989
                                Flat 10% Off your first purchase. Download the app and use
                                Code: APP10
                            </p>
                        </div>
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
            </div>
            <div className='reviews-main container w-100 d-flex justify-content-between flex column'>
            <div className='d-flex flex-column w-50'>
                <div className='reviews-left w-100 d-flex flex-column'>
                    <div className='reviews-left-headers d-flex'>
                        <h6 className='f-lheader '>Returns</h6>
                        <h6 className='ps-3 pt-1'>Our Promise</h6>
                    </div>
                    <p className='ret-desc ps-2' style={{border: '1px solid black'}}>7 day Return and Exchange <a href="/">click here.</a></p>
                </div>
                <div>
                    <p>Reviews and Ratings</p>
                </div>
                </div>
                <div className='reviews-right w-50' style={{marginLeft:'11rem'}}>
                    <div>
                        <h3>Product Description</h3>
                        <p>
                            This Saree Is Suitable To Get A Contemporary Stylish Look In Normal
                            Occasions, College Farewell, Family Get Together, Regular Or Daily Use,
                            Office Or Work Or Gifting To Loved One.
                        </p>
                        <p>
                            This Saree Is Suitable To Get A Contemporary Stylish Look In Normal
                            Occasions, College Farewell, Family Get Together, Regular Or Daily Use,
                            Office Or Work Or Gifting To Loved One.
                        </p>
                    </div>
                    <div className='pro-details'>
                        <div>
                            <h3>Product Details</h3>
                        </div>
                        <div className='pro-contents d-flex justify-content-between'>
                            <div>
                                <p>Material Composition</p>
                                <p>Weave Type</p>
                                <p>Included Components</p>
                                <p>Product Manufacturer</p>
                            </div>
                            <div>
                                <p>Silk</p>
                                <p>Jacquard Type</p>
                                <p>With blouse piece</p>
                                <p>Leemboodi Fashion</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* half page completion */}
            <div className='secondmain px-4'>
                <h1>You may also like</h1>
                <div className='secondmain-inner d-flex justify-content-between'>
                    <div className='innerCard'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                    <div className='innerCard'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                    <div className='innerCard'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                    <div className='innerCard'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Producttemplate