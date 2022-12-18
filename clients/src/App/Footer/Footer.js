import React from 'react'
import '../App.css'
import Swal from 'sweetalert2'

function Footer() {
 
  return (
<>
<h1 className='text-center' style={{marginBottom:"0"}} onClick={(e)=>Swal.fire({
    title: 'Paglu',
    text: 'You Are right 👍',
    icon: 'love',
    confirmButtonText: 'Cool'
  })}> Anmol Pagal he ❤️❤️❤️</h1><br /><br />

</>

  )
}

export default Footer