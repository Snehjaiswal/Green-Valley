import Header from "./App/Header/Header";
import Navbar from "./App/Header/Navbar";
import Home from './App/Home/Home'
import Footer from "./App/Footer/Footer";
import App1 from './App/Cards/App'
import { Route, Routes } from 'react-router-dom';
import Cart from "./App/Cards/Cart";
import { CartProvider } from "react-use-cart";
import Home1 from "./App/Header/Nav2";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<>< Home /><App1 /></>}></Route>
        <Route path='/cart' element={<CartProvider>   
          <Cart />
          </CartProvider>}></Route>
          <Route path="/" element={<Home1/>}/> 
      </Routes>
      <Footer />

    </>
  );
}

export default App;
