import React from 'react'

function Userprofile() {
  
const userName = localStorage.getItem("userEmail")



  return (
    
    <h1 className="text-center">Welcome  {userName.split('@')[0]}...</h1>

  )
}

export default Userprofile