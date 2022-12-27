import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";




function Header() {
  const {cartTotal} = useCart();

  const navigate = useNavigate();
  const roleid = localStorage.getItem('roleid')

  const home = () => {
    navigate('/home');

  }
  const shop = () => {
    navigate('/shop');

  }
  const grocer = () => {
    navigate('/grocer');

  }
  const blogs = () => {
    navigate('/blog');

  }
  const contact = () => {
    navigate('/contact');

  }
  const Cart = () => {
    navigate('/cart')
  }

  const Login = () => {
    navigate('/login')
  }

  const Sellerdashboard = ()=>{
    navigate('/client/dashboard')
  }

  // const profilePage = () => {
  //   if (roleid == 1) {
  //     navigate('/userprofile');
  //   } else if (roleid == 2) {
  //     console.log("dsbcudv");
  //     navigate('/sellerProfile');
  //   } else if (roleid == 3) {
  //     navigate('/adminprofile');
  //   } else {
  //     navigate('/login');
  //   }
  // }

  const logoutuser = () => {
    console.log("logout");
    localStorage.clear();
    navigate('/login');
  }
  const Admindashboard= ()=>{
    navigate('/admin/home');
  }


  // Local Storeage 
  const count = localStorage.getItem('count')

  function Profilefunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


const upload= async (e)=>{
console.log(e.target.files,'..........');
const file=e.target.files[0]
const base =await base64(file)
console.log('.............................',base);
}
const base64=(file)=>{
return new Promise((resolve,reject)=>{
const filereader=new FileReader()
filereader.readAsDataURL(file)
filereader.onload=()=>{
  resolve(filereader.result)
}
filereader.onerror=(err)=>{
  reject(err)
}
})
}
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{"paddingRight":"0"}}>
          <h3 className="navbar-brand"  style={{"fontSize":"20px",}}> <b>GreenValley</b> </h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={home}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={shop}>Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={grocer}>Green Grocer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={blogs}>Blogs</a>
              </li>
              <li className="nav-item">
              <a className="nav-link text-dark" onClick={blogs}><input type='file' onChange={(e)=>{
                upload(e)
              }} /></a>
            </li>
              <li className="nav-item">

                <div className="dropdown">
                  <a className="nav-link text-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                    aria-expanded="false"  >Pages</a>


                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: '0px' }}>
                    <li><a className="dropdown-item text-dark" style={{ width: '100px', }}>Pages 1</a></li>
                    <li><a className="dropdown-item text-dark" style={{ width: '100px', }}>Pages 1</a></li>
                    <li><a className="dropdown-item text-dark" style={{ width: '100px', }}>Pages 1</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={contact} >Contact</a>
              </li>

            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={Cart} ><i className="fa-solid fa-cart-shopping"></i>[1]</a>

              </li>  
              
              {/* Notification */}
               <li className="nav-item">
                <a className="nav-link text-dark"  ><i className="fa-sharp fa-solid fa-bell"></i></a>
              </li>

              {/* Login */}
              <li className="nav-item dropdown">
                {!roleid ? <a className="nav-link text-dark" onClick={Login} >Login</a> : roleid == 3 ?
                 <>
                  <a className="nav-link text-dark ali dropbtn" onClick={Profilefunc} ><img
                          className="profile-user-img img-responsive img-circle ms-2  rounded-circle"
                          src="http://app.smartalgo.in/assets/dist/img/avatar.png"
                          alt="profile "
                          style={{ width: "40px", textAlign: "center", justifyContent: "center" }} /></a>
                          
                  <div id="myDropdown" className="dropdown-content" style={{ paddingLeft: "1rem", }}>
                    <ul style={{ paddingLeft: "1rem",  }}>
                    
                      <li>  <a onClick={Admindashboard}>Dashboard</a></li>
                      <li>  <a href="setting">setting</a></li>
                      <li>  <a href="about">About us</a></li>
                      <li>  <a onClick={logoutuser}>Logout     <i class="fa fa-sign-out pull-right"/> </a></li>
                    </ul>
                  </div>
                </>
                 :roleid == 2 ? 
                 <>
                   <>
                  <a className="nav-link text-dark ali dropbtn" onClick={Profilefunc} ><img
                          className="profile-user-img img-responsive img-circle ms-2  rounded-circle"
                          src="http://app.smartalgo.in/assets/dist/img/avatar.png"
                          alt="profile "
                          style={{ width: "40px", textAlign: "center", justifyContent: "center" }} /></a>
                          
                  <div id="myDropdown" className="dropdown-content" >
                    <ul style={{ paddingLeft: "1rem",  }}>
                    
                      <li>  <a onClick={Sellerdashboard}>Dashboard</a></li>
                      <li>  <a href="setting">setting</a></li>
                      <li>  <a href="about">About us</a></li>
                      <li>  <a onClick={logoutuser}>Logout     <i class="fa fa-sign-out pull-right"/> </a></li>
                    </ul>
                  </div>
                </>
                
                
                
                
                </>: <>
                  <a className="nav-link text-dark ali dropbtn" onClick={Profilefunc} ><img
                          className="profile-user-img img-responsive img-circle ms-2  rounded-circle"
                          src="http://app.smartalgo.in/assets/dist/img/avatar.png"
                          alt="profile "
                          style={{ width: "40px", textAlign: "center", justifyContent: "center" }} /></a>
                  <div id="myDropdown" className="dropdown-content" >
                    <ul style={{ paddingLeft: "0.2rem",  }}>
                    
                      <li>  <a> Profile</a></li>
                      <li>  <a href="setting">setting</a></li>
                      <li>  <a href="about">About us</a></li>
                      <li>  <a onClick={logoutuser}>Logout     <i class="fa fa-sign-out pull-right"/> </a></li>

                    </ul>
                  </div>
                </>

                } </li>


            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header