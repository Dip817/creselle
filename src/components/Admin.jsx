import React from 'react'
import '../assets/admin.css'
function Admin() {
    return (
        <>
            {/* header section */}
            <div className='d-flex justify-content-between' style={{ padding: '2%' }}>
                <h1>CRESELLE</h1>
                <h1>Overview</h1>
            </div>
            {/* main body beginning */}
            <div className='mainbody w-100 d-flex'>
                {/* leftdiv beginning */}
                <div className='mainbody-left d-flex flex-column' style={{ width: '15%', backgroundColor: 'yellowgreen', gap: '50px' }}>
                    <div className='dash d-flex align-items-center' style={{ paddingLeft: '25%', gap: '8px' }}>
                        <i class='bx bxs-home'></i>
                        <p>Dashboard</p>
                    </div>
                    <div className='use d-flex align-items-center' style={{ paddingLeft: '25%', gap: '8px' }}>
                        <i class='bx bxs-user'></i>
                        <p>Users</p>
                    </div>
                    <div className='sale d-flex align-items-center' style={{ paddingLeft: '25%', gap: '8px' }}>
                        <i class='bx bxs-shopping-bag-alt'></i>
                        <p>Sales</p>
                    </div>
                    <div className='pro d-flex align-items-center' style={{ paddingLeft: '25%', gap: '8px' }}>
                        <i class='bx bxs-store-alt'></i>
                        <p>Products</p>
                    </div>
                    <div className='add-prod d-flex align-items-center' style={{ paddingLeft: '25%', gap: '8px' }}>
                        <i class='bx bxs-plus-circle'></i>
                        <p>Add Products</p>
                    </div>
                </div>
                {/* rightdiv beginning */}
                <div className='mainbody-right' style={{ width: '85%', backgroundColor: 'black' }}>
                    <h4 style={{ color: 'white', paddingLeft: '5%', paddingTop: '3%' }}>All Products on Site</h4>
                    <div className='mainbody-right-box' style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                        <div className='mainbody-right-boxheaders d-flex justify-content-around' style={{ color: '#718EBF', marginBottom: '1px solid #E6EFF5' }}>
                            <h6>Description</h6>
                            <h6>Transaction ID</h6>
                            <h6>Type</h6>
                            <h6>Date</h6>
                            <h6>Amount</h6>
                            <h6>Receipt</h6>
                        </div>
                        <div className='products d-flex justify-content-around' style={{ marginBottom: '1px solid #E6EFF5' }}>
                        <p>Saree</p>
                        <p>#12548796</p> 
                        <p>Shopping</p>
                        <p>28 Jan</p>
                        <p>$2,500</p>
                        <button id='receipt'>
                                <a href="/">Edit</a>
                            </button>
                        </div>                       
                    </div>
                    <div className='mainbody-right-lower-div d-flex justify-content-around mt-5'>
                            <div className='bal'style={{background:'white',width:'20%',borderRadius:'20px'}}>
                            <i class='bx bxs-wallet'></i><p>My Balance</p>
                            <p>$12,750</p>
                            </div>
                            <div className='inc'style={{background:'white',width:'20%',borderRadius:'20px'}}>
                            <i class='bx bx-dollar-circle'></i>
                            <p>Income</p>
                            </div>
                            <div className='exp'style={{background:'white',width:'20%',borderRadius:'20px'}}>
                            <i class='bx bxs-receipt'></i>
                            <p>Expense</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Admin