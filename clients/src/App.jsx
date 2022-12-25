import Header from "./App/Header/Header";
// import Navbar from "./App/Header/Navbar";
import Home from './App/Home/Home'
import Footer from "./App/Footer/Footer";
import App1 from './App/Cards/App'
import { Route, Routes,useLocation  } from 'react-router-dom';
import Cart from "./App/Cards/Cart";
import { CartProvider } from "react-use-cart";

import Blogs from "./App/Blogs/Blogs";
import Contact from "./App/Contact/Contact";
import Grocer from "./App/Grocers/Grocer";
import Grocerhome from './App/Grocers/Grocerhome'
import Profiepage from "./App/Profile-Page/Userprofile";
import Adminprofile from "./App/Admin/Profile/Adminprofile";
import Sellerdasboard from "./App/Seller/Dashboard/Sellerdashboard";
import Userprofile from "./App/Profile-Page/Userprofile";
import Otpverify from "./App/Logins/Otpverify";
import Login from "./App/Logins/Login";
import AdminDashboard from './App/Admin/Dashboards/Dashboard'

function App() {
  const location =useLocation()
  console.log("location",location);

  return (
    <>
    
      {/* */}
      {location.pathname.includes("/admin") ? "" :  <Header /> }

      <Routes>
        <Route exact path='/' element={<>< Home /><App1 /></>}></Route>
        <Route path='/cart' element={<CartProvider>
          <Cart />
        </CartProvider>}></Route>

        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<App1 />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grocer" element={<Grocer />} />
        <Route path="/grocerhome" element={<Grocerhome />} />
        <Route path="/profilePage" element={<Profiepage />} />
        <Route path="/otpverify" element={<Otpverify />} />
        <Route path="/login" element={<Login />} />


        {/* Admin Router */}
        <Route path="/adminprofile" element={<Adminprofile />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />



        {/* Seller Router */}
        <Route path="/client/dashboard" element={<Sellerdasboard />} />


        {/* User Router */}
        <Route path="/userprofile" element={<Userprofile />} />


      </Routes>
       {/* <Footer /> */}
       
    </>
  );
}

export default App;
