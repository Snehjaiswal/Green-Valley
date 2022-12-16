import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();


    const login = () => {
        navigate('/login');

    }


    return (
        <>

            <form class="main">
                <h1>Sign Up</h1>
                <div class="un">
                    <input type="text" placeholder="Username *" required />
                </div>
                <div class="em">
                    <input type="email" placeholder="E-mail *" required />
                </div>
                <div class="orp">
                    <input type="password" placeholder="Password *" required />
                </div>
                <div class="confp">
                    <input type="password" placeholder="Confirm Password *" required />
                </div>
                <button type="submit">Sign Up</button>
                <h5>Have an Account? <a onClick={login}> Log In Here</a></h5>
                <hr />
                <h4>Or Register With</h4>
                <div class="icons">
                    <div class="icon-container">
                        <a href="https://elzero.org/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div class="icon-container">
                        <a href="https://elzero.org/" target="_blank">
                            <i class="fab fa-twitter"></i>
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

export default Registration