import Header from "./App/Header/Header";
// import Navbar from "./App/Header/Navbar";
import Home from './App/Home/Home'
import Footer from "./App/Footer/Footer";
import App1 from './App/Cards/App'
import { Route, Routes } from 'react-router-dom';
import Cart from "./App/Cards/Cart";
import { CartProvider } from "react-use-cart";
// import Shop from "./App/Shop/Shop";
import Blogs from "./App/Blogs/Blogs";
import Contact from "./App/Contact/Contact";
import Grocer from "./App/Grocers/Grocer";
import Grocerhome from './App/Grocers/Grocerhome'
import Profiepage from "./App/Profile-Page/Userprofile";
import Adminprofile from "./App/Admin/Profile/Adminprofile";
import SellerProfile from "./App/Seller/Profile/SellerProfile";
import Userprofile from "./App/Profile-Page/Userprofile";
import Otpverify from "./App/Logins/Otpverify";
import Login from "./App/Logins/Login";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route exact path='/' element={<>< Home /><App1 /></>}></Route>
        <Route path='/cart' element={<CartProvider>   
          <Cart />
          </CartProvider>}></Route>

          <Route path="/home" element={<Home/>}/> 
          <Route path="/shop" element={<App1/>}/>
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/grocer" element={<Grocer/>}/>
          <Route path="/grocerhome" element={<Grocerhome/>}/>
          <Route path="/profilePage" element={<Profiepage/>}/>

          <Route path="/userprofile" element={<Userprofile/>}/>
          <Route path="/adminprofile" element={<Adminprofile/>}/>
          <Route path="/sellerProfile" element={<SellerProfile/>}/>
          <Route path="/otpverify" element={<Otpverify/>}/>
          <Route path="/login" element={<Login/>}/>




          


      </Routes>
      <Footer />

    </>
  );
}

export default App;
