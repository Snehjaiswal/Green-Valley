import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Registration() {
    const navigate = useNavigate();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

console.log(name,email,password,cpassword);



    const login = () => {
        navigate('/login');
    }


const SignUp = ()=>{ 
    var config = {
      method: 'post',
      url: 'http://localhost:5050/api/login/signup', 
      data : {
        
            "Name": name,
            "email": email,
            "password":password,
            "cpassword": cpassword     
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log("response",response);
    //   navigate('/otpverify',{state:{emaiil:email,id:63a136ba204d9bbfb0933ec9}});
    //   navigate('/otpverify',{state:email});

    })
    .catch(function (error) {
      console.log(error);
    });
    

}






    return (
        <>

            <div className="main">
                <h1>Sign Up</h1>
                <div className="un">
                    <input type="text" placeholder="Name *" onChange={(e)=>{setname(e.target.value)}} required />
                </div>
                <div className="em">
                    <input type="email" placeholder="E-mail *" onChange={(e)=>{setemail(e.target.value)}} required />
                </div>
                <div className="orp">
                    <input type="password" placeholder="Password *" onChange={(e)=>{setpassword(e.target.value)}} required />
                </div>
                <div className="confp">
                    <input type="password" placeholder="Confirm Password *" onChange={(e)=>{setcpassword(e.target.value)}} required />
                </div>
                <button type="submit" onClick={SignUp}>Sign Up</button>
                <h5>Have an Account? <a href='-' onClick={login}> Log In Here</a></h5>
                <hr />
                <h4>Or Register With</h4>
                <div className="icons">
                    <div className="icon-container">
                        <a href="https://elzero.org/" >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div className="icon-container">
                        <a href="https://elzero.org/" >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div className="icon-container">
                        <a href="https://github.com/PhilopaterHany" >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Registration