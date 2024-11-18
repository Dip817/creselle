import React from 'react'
import cardOne from '../imgs/img1.png'
import cardTwo from '../imgs/img2.png'
import cardThree from '../imgs/img3.png'
function Home() {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Trending
                    </h1>
                </div>
                <div className='d-flex justify-content-around'>
                    <div className="card" >
                        <img src={cardOne} className="card-img-top" alt="..." />                        
                        <div className="card-body-main">
                            <p className="card-text">
                                Cotton salwar kameez at just one click away from being added to your collection.
                            </p>
                        </div>
                        <div className="card-body d-flex">
                            <p class='card-price'>
                                INR 1299
                            </p>
                            <a href="/" className="card-link">Add to cart</a>
                        </div>
                    </div>
                    {/* this is second card */}                    
                    <div className="card" >
                        <img src={cardTwo} className="card-img-top" alt="..." />
                        <div className="card-body-main">
                            <p className="card-text">
                                Cotton salwar kameez at just one click away from being added to your collection.
                            </p>
                        </div>
                        <div className="card-body d-flex">
                            <p classprice='card-price' style={{margin:'auto'}}>
                                INR 5999
                            </p>
                            <a href="/" className="card-link">Add to cart</a>
                        </div>
                    </div>
                    {/* this is third card */}
                    <div className="card" >
                        <img src={cardThree} className="card-img-top" alt="..." />
                        <div className="card-body-main">
                            <p className="card-text">
                                Cotton salwar kameez at just one click away from being added to your collection.
                            </p>
                        </div>
                        <div className="card-body d-flex">
                            <p className='card-price'>
                                INR 1299
                            </p>
                            <a href="/" className="card-link">Add to cart</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Home;
