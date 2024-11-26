import React from 'react'
import itemOne from '../imgs/item1.png'
function Cart() {
    return (
        <>


            <div>
                <h2>YOUR CART</h2>
            </div>
            <div className='p-4'>
                <div className='prod-headers d-flex align-items-center'>
                    <p className='prod'>PRODUCT</p>
                    <p className='pri'>PRICE</p>
                    <p className='quan'>QUANTITY</p>
                    <p className='subt'>SUBTOTAL</p>
                </div>
                < className='prod-main' style={{ background: 'tan', borderBottom: '1px solid black' }}>
                    <div className='items d-flex justify-content-around' style={{ width: '40%', borderRight: '1px solid black' }}>
                        <div><img src={itemOne} alt="..." /></div>
                        <div><a href="/">YELLOW SAREE</a></div
                 </div>
                </div>
            </div>
        </>
    )
}

export default Cart