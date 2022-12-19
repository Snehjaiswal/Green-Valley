import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

// console.log("email",email);



  const Registration = () => {
    navigate('/registration');

  }

const Login= ()=>{
  var config = {
    method: 'post',
    url: 'http://localhost:5050/api/login/signin',

    data : {
    "email":email,
      "password": password
  }
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    localStorage.setItem('roleid',1)
    navigate('/userprofile');
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
  
 







  return (
    <>


      <div className="main">
        <h1>Login</h1>
        <div className="un">
          <input type="text" placeholder="Username/Email" onChange={(e)=>{setemail(e.target.value)}}  required />
        </div>

        <div className="orp">
          <input type="password" placeholder="Password *"  onChange={(e)=>{setpassword(e.target.value)}}  required />
        </div>

        <button type="submit" onClick={Login}>Login</button>
        <h5>Don't Have an Account? <a href='registration' onClick={Registration}> Log In Here</a></h5>
        <hr />
        <h4>Login With</h4>
        <div className="icons">
          <div className="icon-container">
            <a href='-'>
              <i className="fab fa-google"></i>
            </a>
          </div>

          <div className="icon-container">
            <a href='-'>
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>

          <div className="icon-container">
            <a href='-'>
              <i className="fab fa-github"></i>
            </a>
          </div>


        </div>
      </div>

    </>
  )
}

export default Login