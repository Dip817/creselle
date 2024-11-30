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
            <div className='lower-main'>
                <div className='lower-main-left justify-content-end d-flex' >
                    <div className='lower-main-left-headers d-flex flex-column  mt-5' >
                        <div className='d-flex'>
                            <p style={{border:'1px solid black',margin:'0px'}}>Returns</p>
                            <p style={{margin:'0px'}}>Our Promise</p>
                        </div>
                        <div>
                            <p style={{border:'1px solid black' }}>7 day Return and Exchange <a href="/" style={{ textDecoration: 'none' }}>click here.</a></p>
                        </div>
                    </div>
                </div>
                <div className='lower-main-right'></div>
            </div>
        </>

    )
}

export default Productpage