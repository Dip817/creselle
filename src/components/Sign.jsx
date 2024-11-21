import React from 'react'
function Sign() {
  return (
    <div className='main d-flex align-items-center'>        
        <div className='inner d-flex flex-column justify-content-around'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <h2 style={{ color: 'white' }}
                > Sign in               
                </h2>
                <span>
                    Already a user?<a href='/'>Log in </a>
                </span>
            </div>
            <div className='d-flex flex-column ' style={{width:'80%', alignSelf:'center'}}>
            <p className='user'>
                Username                
            </p>
            <input type='text'></input>
            <p className='email'>
                Email
            </p>
            <input type='email'></input>
            <p className='password'>
                Password
            </p>
            <input type='password'></input>
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <button id='signinB'>
                <a  href="/">Sign in</a>
                </button>
            </div>        
        </div>
    </div>
         )
}
export default Sign