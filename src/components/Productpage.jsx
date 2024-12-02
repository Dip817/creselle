import React from 'react'
import '../assets/product.css'
import imgFour from '../imgs/img1.png'

function Productpage() {
    return (
        <>
            {/* main div starts from here */}
            <div className='product-div d-flex '>
                {/* left div beginning*/}
                <div className='left-main d-flex'>
                    <div className='left-main-inner-one d-flex flex-column'>
                        <img src='' alt='img -1' />
                        <img src='' alt='img -2' />
                        <img src='' alt='img -3' />
                    </div>
                    <div className='left-main-inner-two'>
                        <img src={imgFour} alt='img -4' />
                    </div>
                </div>
                {/* right div beginning */}
                <div className='right-main d-flex flex-column justify-content-between'>
                    <h2>PINK TEXTURED SAREE</h2>
                    <div className='right-main-inner-one' style={{ marginLeft: '5%' }}>
                        <p>INR 1,399</p>
                        <p>Inclusive of all taxes</p>
                    </div>
                    <div className='right-main-inner-two' style={{ marginLeft: '20%' }}>
                        <p><i className='bx bxs-offer mx-2'></i>Get this for INR 989
                            Flat 10% Off your first purchase. Download the app and use
                            Code: APP10</p>
                        <p><i className='bx bxs-offer mx-2'></i>Get this for INR 989
                            Flat 10% Off your first purchase. Download the app and use
                            Code: APP10</p>
                        <p><i className='bx bxs-offer mx-2'></i>Get this for INR 989
                            Flat 10% Off your first purchase. Download the app and use
                            Code: APP10</p>
                    </div>
                    <div className='right-main-inner-three d-flex justify-content-between  align-items-center'>
                        <div style={{ width: '30%' }} className=''><p>Select a size</p>
                            <div className='right-main-inner-three-one d-flex justify-content-between' style={{ width: '80%' }}>
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                            </div>
                        </div>
                        <div className='right-main-inner-three-two align-items-center' style={{ width: '30%' }}>
                            <p>Quanitity</p>
                            <div className='right-main-inner-three-three d-flex justify-content-between align-items-center' style={{ width: '50%' }}>
                                <p>-</p>
                                <p>0</p>
                                <p>+</p>
                            </div>
                        </div>
                        <div className='right-main-inner-three-four d-flex flex-column align-items-center' style={{ width: '30%' }}>
                            <p>Total</p>
                            <div>
                                INR 1,299
                            </div>
                        </div>
                    </div>
                    <div className='right-main-inner-four d-flex flex-column'>
                        <button id='add-to-cart' style={{ backgroundColor: 'green', border: 'none', marginBottom: '2px' }}>
                            <a href="/" style={{ color: 'white' }}>Add to cart</a>
                        </button>
                        <button id='buy-now' style={{ backgroundColor: 'black', border: 'none' }}>
                            <a href="/" style={{ color: 'white' }}>Buy Now</a>
                        </button>
                    </div>
                </div>
                {/* half page completion */}
            </div>
            <div className='lower-main d-flex' style={{ gap: '15px' }}>
                {/* left div beginning */}
                <div className='lower-main-left justify-content-end d-flex flex-column' style={{ paddingLeft: '15%' }} >

                    <div className='lower-main-left-headers d-flex flex-column  mt-5' style={{ width: '100%' }}>
                        <div className='d-flex'>
                            <p style={{ border: '1px solid black', margin: '0px' }}>Returns</p>
                            <p style={{ margin: '0px', paddingLeft: '1%', paddingTop: '2px' }}>Our Promise</p>
                        </div>
                        <div>
                            <p style={{ border: '1px solid black', padding: '5%' }}>7 day Return and Exchange <a href="/" style={{ textDecoration: 'none' }}>click here.</a></p>
                        </div>
                    </div>
                    <div className='lower-main-left-bottom'>
                        <div className='lower-main-left-bottom-up mt-5'>
                            <div><p>Reviews and Ratings</p></div>
                            <div>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <button id='reviews'>
                                    <a href="/">(39 reviews)</a>
                                </button>  </div>
                        </div>
                        <div className='lower-main-left-bottom-down d-flex justify-content-between'>
                            <div className='lower-main-left-bottom-down-left'>
                                <h1>4.1</h1>
                                <p>420 Customers</p>
                            </div>
                            <div className='d-flex align-items-center flex-column'> <div className='lower-main-left-bottom-down-right'>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                            </div>
                                <button id='Write-R'>WRITE A REVIEW</button></div>
                        </div>
                    </div>
                </div>
                {/* right div beginning */}
                <div className='lower-main-right'>
                    <h5 style={{ marginTop: '10%' }}>Product Description</h5>
                    <p>
                        This Saree Is Suitable To Get A Contemporary Stylish Look In Normal
                        Occasions, College Farewell, Family Get Together, Regular Or Daily Use,
                        Office Or Work Or Gifting To Loved One.</p>
                    <p> Colour Of The Actual Product May Slightly Vary Due To Different Photographic Lighting Sources Or Your Display Color Settings Or Screen Type
                    </p>
                    <h5>Product Details</h5>
                    <div className='d-flex justify-content-between'>
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
            </div >
            {/* above footer section beginning */}
            <div className='' style={{marginTop:'5%'}}>
                <h1>You may also like</h1>
                <div className='second-lower d-flex justify-content-between' style={{marginTop:'5%'}}>
                    <div className='second-lower-inner'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                    <div className='second-lower-inner'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                    <div className='second-lower-inner'>
                        <img src='' href alt='/'></img>
                        <p>
                            Cotton Saree at minimal cost than you can even imagine.
                        </p>
                        <p>
                            INR 2,999
                        </p>
                    </div>
                    <div className='second-lower-inner'>
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

export default Productpage