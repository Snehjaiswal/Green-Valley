import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
function Adminprofile() {

  const navigate = useNavigate();
  const sellerslist = () => {
      navigate('/sellerslist')
  }
  const userslist = () => {
      navigate('/userslist')
  }
  return (<>
<Sidebar/>
<h1 className="text-center">Admin Profile</h1>
  </>
  )
}

export default Adminprofile