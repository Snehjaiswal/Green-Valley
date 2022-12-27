import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import Conformalert from '../ConformAlert';


function Login() {
    const navigate = useNavigate();

    const [first, setfirst] = useState('')
    const [name, setName] = useState('')
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcPassword] = useState('')

    // const [showAlert, setShowAlert] = useState(false);
    // const [textAlert, setTextAlert] = useState("");
    // const [alertColor, setAlertColor] = useState("");

    // const onAlertClose = e => {
    //     setShowAlert(false);
    // }


    const Signup = () => {

        var config = {
            method: 'post',
            url: 'http://localhost:7070/api/login/signup',

            data: {
                "Name": name,
                "email": email,
                "password": password,
                "cpassword": cpassword
            }
        };
        axios(config)
            .then(function (response) {
                console.log("response", response.data.msg);

                localStorage.setItem('userEmail', email)
                if (response.data.msg === 'Register Success! Please activate your email to start.') {
                    navigate('/Otpverify');
                } else {
                    alert(response.data.msg)

                }

            })
            .catch(function (error) {
                alert(error)
            });

    }




    const SignIn = () => {

        var config = {
            method: 'post',
            url: 'http://localhost:7070/api/login/signin',

            data: {
                "email": email,
                "password": password
            }
        };
        axios(config)
            .then(function (response) {
                console.log(response.data);
                if (response.data.msg === 'Login success!') {
                    localStorage.setItem('userEmail', email)
                    localStorage.setItem('roleid', response.data.data.roleId)
                    localStorage.setItem('userid', response.data.data._id)

                    if (response.data.data.roleId === 1) {
                        navigate('/home');
                    } else if (response.data.data.roleId === 2) {

                        navigate('/home');
                    } else if (response.data.data.roleId === 3) {
                        navigate('/home');
                    } else {
                        navigate('/home');

                    }
                }
            })
            .catch(function (error) {
                alert(error)

            });

    }

    return (
        <><div className='loginbody'>
            <div className={first ? `${first} login_container` : "login_container"} id="login_container">
                <div className="form-login_container  sign-up-login_container">
                    <div  className='loginform'  action="">
                        <div className="header">Sign Up</div>
                        <div className="social__media__login_container">
                            <a href="https://codepen.io/Rittenhouse" target="_blank" className="social codepen">
                                <i className="fa-brands fa-codepen" />
                            </a>
                            <a href="#" className="social google">
                                <i className="fa-brands fa-google" />
                            </a>
                            <a href="https://www.instagram.com/zaur.suleymnv/" target="_blank" className="social agram">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                        <span className="under__social">
                            <span className="link signin-link">or use your email for registration
                            </span>
                        </span>
                        <div className="button-input-group">
                            <div className="group input-group">
                                <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} required />
                            </div>
                            <div className="group input-group">
                                <input type="email" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} required />
                            </div>
                            <div className="group input-group">
                                <input type="text" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} required pattern=".{8,}" />
                            </div>
                            <div className="group input-group">
                                <input type="text" placeholder="Confirm Password" onChange={(e) => { setcPassword(e.target.value) }} required pattern=".{8,}" />
                            </div>
                            <div className="alert-text signup__alert">
                                {/* <span className="help__text">At least 8 character</span> */}
                            </div>
                            <div className="group button-group">
                                <button className="signup-btn" onClick={Signup}  >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-login_container  sign-in-login_container">
                    <div className='loginform' >
                        <div className="header" >Sign In</div>
                        <div className="social__media__login_container">
                            <a href="https://codepen.io/Rittenhouse" target="_blank" className="social codepen">
                                <i className="fa-brands fa-codepen" />
                            </a>
                            <a className="social google">
                                <i className="fa-brands fa-google" />
                            </a>
                            <a href="https://www.instagram.com/zaur.suleymnv/" target="_blank" className="social instagram">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                        <span className="under__social">
                            <span  className="link signup-link">or use your account</span>
                        </span>
                        <div className="button-input-group">
                            <div className="group input-group">
                                <input type="email" placeholder="Email" onChange={(e) => { setemail(e.target.value) }}  />
                            </div>
                            <div className="group input-group">
                                <input type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }}  />
                            </div>
                            <div className="alert-text signup__alert">
                                {/* <span className="help__text">At least 8 character</span> */}
                            </div>
                            <div className="form-link forgot">
                                <a className="login-link">Forgot your password?</a>
                            </div>
                            <div className="group button-group">
                                <button className="signin-btn" onClick={SignIn} >Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay-login_container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Please login your personal info</p>
                            <div className="group button-group">
                                <button className="ghost" id="signIn" type="submit" onClick={(e) => setfirst('')} >Sign in</button>
                            </div>
                            {/* <footer>
                                <p>Inspired by <a href="https://codepen.io/Rittenhouse" target="_blank">Zaur Suleymanlı</a></p>
                            </footer> */}
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <div className="group button-group">
                                <button className="ghost" id="signUp" onClick={(e) => setfirst('right-panel-active')}  >Sign up</button>
                            </div>
                            {/* <footer>
                                <p>Inspired by <a href="https://codepen.io/Rittenhouse" target="_blank">Zaur Suleymanlı</a></p>
                            </footer> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>




        </>
    )

}

export default Login