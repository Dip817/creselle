import React from 'react'
function Login() {
  return (
    <div className='main d-flex align-items-center text-light'>        
        <div className='inner d-flex flex-column justify-content-around'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <h2 style={{ color: 'white' }}
                > Login              
                </h2>
                <span className='text-dark'>
                    Not a user?<a href='/' className='ms-2'>Sign in </a>
                </span>
            </div>
            <div className='d-flex flex-column ' style={{width:'80%', alignSelf:'center'}}>
            <p className='useroremail'>
                Username or email               
            </p>
            <input type='text'></input>
            <p className='pass'>
                Password
            </p>
            <input type='password'></input>
            <p className='rememberMe'>
            <input type='checkbox'></input>
                Remember me
            </p>
            {/* <input type='checkbox'></input> */}
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <button id='signinB'>
                <a  href="/">Login</a>
                </button>
                <p>
                    <a style={{ color: 'black' }} href="/">Forgot your password?</a>
                </p>
            </div>        
        </div>
    </div>
         )
}
export default Login