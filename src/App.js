import Home_page from "./container/pages/Home_Page"
import Navbar from "./container/components/Navbar"
import Login_Page from "./container/pages/Login_Page";
import Signup_Page from "./container/pages/Signup_Page";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Search_Page from "./container/pages/Search_Page";
import Footer from "./container/components/Footer";
import Cart_Page from "./container/pages/Cart_Page";
import Product_Page from "./container/pages/Product_Page";
import { useEffect } from "react";
import { getUserById } from "./redux/actions/user_action";
import { useDispatch } from "react-redux/es/exports"; 
import { getCartProducts } from "./redux/actions/cart_action";
import { useSelector } from "react-redux/es/exports";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserById())
  },[])


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/product/:id" element={<Product_Page />} />
          <Route path="/search/:query" element={<Search_Page />} />
          <Route path="/cart" element={<Cart_Page />} />
          <Route path="/sign-up" element={<Signup_Page />} />
          <Route path="/login" element={<Login_Page />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
