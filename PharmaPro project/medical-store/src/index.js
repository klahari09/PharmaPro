import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layout';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import ProductList from './pages/admin/products/ProductList';
import CreateProduct from './pages/admin/products/CreateProduct';
import EditProduct from './pages/admin/products/EditProduct';
import Profile from './pages/admin/profile/Profile';
import Logout from './pages/admin/logout/Logout';
import WishList from './pages/admin/wishlist/WishList';
import Cart from './pages/admin/cart/Cart';
import CheckOut from './pages/admin/checkout/CheckOut';




function App(){
    return (
      <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/contact" element={<Contact />}/>
         <Route path="/profile" element={<Profile />}/>
         <Route path="/logout" element={<Logout />}/>
         <Route path="/wishlist" element={<WishList />}/>
         <Route path="/cart" element={<Cart />}/>
         <Route path="/checkout" element={<CheckOut />}/>
         <Route path="/admin/products" element={<ProductList />}/>
         <Route path="/admin/products/create" element={<CreateProduct />}/>
         <Route path="/admin/products/edit/:id" element={<EditProduct />}/>
         <Route path="*" element={<NotFound/>}/>
       </Routes>
       <Footer />
      </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

