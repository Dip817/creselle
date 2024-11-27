import React, {useState} from 'react'
import itemOne from '../imgs/item1.png'
import '../assets/cart.css'
function Cart() {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(1000);


    // function to handle quantity increment and decrement
    const handleIncrement = () => {
        setQuantity(quantity + 1);
        setTotal(total + 1000);
    }
    const handleDecrement = () => {
        if(quantity>1){
            setQuantity(quantity - 1); //when quantity is more than 0
            setTotal(total - 1000);
        }
    }


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
                <div className='prod-main py-3' style={{ background: 'tan' }}>
                    <div className='prod-main-inner d-flex p-2' style={{borderBottom: '1px solid black'}}>
                        {/* this is for the first div */}
                        <div className='prod-inner-div d-flex justify-content-center align-items-center' id='prod-div-inner-one' style={{ width: '40%', borderRight: '1px solid black' }}>
                            <img src={itemOne} alt="..."/>
                            <p id='prod-title' className='mx-2'>YELLOW SAREE</p>
                        </div>
                        {/* this is for the second div */}
                        <div className='prod-inner-div d-flex justify-content-center align-items-center' id='prod-div-inner-two' style={{ width: '20%', borderRight: '1px solid black' }}>
                            <p id='prod-price'>INR 2.999</p>
                        </div>
                        {/* this is for the third div */}
                        <div className='prod-inner-div d-flex justify-content-center align-items-center' id='prod-div-inner-three' style={{ borderRight: '1px solid black' }}>
                            <i class='bx bxs-trash'></i>
                            <div className='item-quantity d-flex justify-content-between'>
                                <p onClick={handleDecrement}>-</p>
                                <p>{quantity}</p>
                                <p onClick={handleIncrement}>+</p>
                            </div>
                        </div>
                        {/* this is for the fourth div */}
                        <div className='prod-inner-div d-flex justify-content-center align-items-center' id='prod-div-inner-four' style={{ width: '20%', borderRight: '1px solid black' }}>
                            <p id='price-total' style={{margin:'auto'}}>{total}</p>
                        </div>
                    </div>
                </div>
                {/* this is for price details */}
                <div className='item-total-inner d-flex'>
                <h5 style={{display: 'block'}}>Price Details:</h5>
                    <div className='item-total-left' style={{ width: '60%' }}>                       
                        <p>Delivery Charges:</p>
                        <p>Shipping Charges:</p>
                        <h4>Order Total :</h4>
                    </div>
                    <div className='item-total-mid' style={{ width: '20%', borderRight: '1px solid black' }}>
                        <p>FREE DELIVERY</p>
                        <p>199</p>
                        <p>4,800</p>
                    </div>
                    <div className='item-total-right' style={{ width: '20%' }}>
                        <button id='checkout'>
                            <a href="/">Proceed to buy</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart