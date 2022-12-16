import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

        const navigate = useNavigate();
    
    
        const Registration = () => {
            navigate('/registration');
    
        }

  return (
   <>
   
   
   <form class="main">
  <h1>Login</h1>
  <div class="un">
    <input type="text" placeholder="Username / Email" required />
  </div>

  <div class="orp">
    <input type="password" placeholder="Password *" required />
  </div>

  <button type="submit">Login</button>
  <h5>Don't Have an Account? <a onClick={Registration}> Log In Here</a></h5>
  <hr />
  <h4>Login With</h4>
  <div class="icons">
    <div class="icon-container">
      <a href="https://elzero.org/" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
    </div>
    
    <div class="icon-container">
      <a href="https://github.com/PhilopaterHany" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</form>
   
   </>
  )
}

export default Login