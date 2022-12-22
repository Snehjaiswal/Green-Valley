import React, { useState } from 'react'
import { useNavigate,useLocation  } from 'react-router-dom';
import axios from 'axios'

function Otpverify() {
  const navigate = useNavigate();
  const [otp, setotp] = useState("");


  const email = localStorage.getItem('userEmail')

  var otp_inputs = document.querySelectorAll(".otp__digit")
  var mykey = "0123456789".split("")
  otp_inputs.forEach((_) => {
    _.addEventListener("keyup", handle_next_input)
  })
  function handle_next_input(event) {
    let current = event.target
    let index = parseInt(current.classList[1].split("__")[2])
    current.value = event.key

    if (event.keyCode == 8 && index > 1) {
      current.previousElementSibling.focus()
    }
    if (index < 6 && mykey.indexOf("" + event.key + "") != -1) {
      var next = current.nextElementSibling;
      next.focus()
    }
    var _finalKey = ""
    // console.log("_finalKey", _finalKey);
    for (let { value } of otp_inputs) {
      _finalKey += value
    }
    if (_finalKey.length == 6) {
      // document.querySelector("#_otp").classList.replace("_notok", "_ok")
      setotp(_finalKey)
      console.log("okokoko",_finalKey);
      // document.querySelector("#_otp").innerText = _finalKey
    } 
  }


const OtpVerify =()=>{
  

  var config = {
    method: 'post',
    url: 'http://localhost:7070/api/login/VerifyedOTP',

    data: {
      "email": email,
      "otp": otp
    }
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      navigate('/userprofile')
    })
    .catch(function (error) {
      console.log(error);
    });
}




  return (
    <>
      <form action="javascript: void(0)" className="otp-form" name="otp-form">
        <div className="title">
          <h3>OTP VERIFICATION</h3>
          <p className="info">An otp has been sent to ***{email.slice(-3)}</p>
          <p className="msg">Please enter OTP to verify</p>
        </div>
        <div className="otp-input-fields">
          <input type="number" className="otp__digit otp__field__1" step="1" onChange={(e) => { setotp(e.target.value) }} />
          <input type="number" className="otp__digit otp__field__2" step="1" onChange={(e) => { setotp(e.target.value) }} />
          <input type="number" className="otp__digit otp__field__3" step="1" onChange={(e) => { setotp(e.target.value) }} />
          <input type="number" className="otp__digit otp__field__4" step="1" onChange={(e) => { setotp(e.target.value) }} />
          <input type="number" className="otp__digit otp__field__5" step="1" onChange={(e) => { setotp(e.target.value) }} />
          <input type="number" className="otp__digit otp__field__6" step="1" onChange={(e) => { setotp(e.target.value) }} />
        </div>
        {/* <div className="result"><p id="_otp" class="_notok">Submit</p></div> */}
        <div className="result"><button onClick={OtpVerify}>Submit</button></div>



      </form>


    </>
  )
}

export default Otpverify