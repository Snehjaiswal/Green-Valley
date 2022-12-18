import React from 'react'
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();


    const login = () => {
        navigate('/login');

    }


    return (
        <>

            <form className="main">
                <h1>Sign Up</h1>
                <div className="un">
                    <input type="text" placeholder="Username *" required />
                </div>
                <div className="em">
                    <input type="email" placeholder="E-mail *" required />
                </div>
                <div className="orp">
                    <input type="password" placeholder="Password *" required />
                </div>
                <div className="confp">
                    <input type="password" placeholder="Confirm Password *" required />
                </div>
                <button type="submit">Sign Up</button>
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
            </form>

        </>
    )
}

export default Registration