import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
// console.log("email",email);


  const Registration = () => {
    navigate('/registration');

  }

  return (
    <>


      <div class="main">
        <h1>Login</h1>
        <div class="un">
          <input type="text" placeholder="Username/Email" onChange={(e)=>{setemail(e.target.value)}}  required />
        </div>

        <div class="orp">
          <input type="password" placeholder="Password *" required />
        </div>

        <button type="submit">Login</button>
        <h5>Don't Have an Account? <a href='-' onClick={Registration}> Log In Here</a></h5>
        <hr />
        <h4>Login With</h4>
        <div class="icons">
          <div class="icon-container">
            <a href='-'>
              <i class="fab fa-google"></i>
            </a>
          </div>

          <div class="icon-container">
            <a href='-'>
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>

          <div class="icon-container">
            <a href='-'>
              <i class="fab fa-github"></i>
            </a>
          </div>


        </div>
      </div>

    </>
  )
}

export default Login