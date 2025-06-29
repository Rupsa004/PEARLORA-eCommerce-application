import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home  from './pages/Home';
import ProductPage from './pages/ProductPage';
import Bag from './pages/Bag';
import NewIn from './pages/NewIn';
import Shop from './pages/Shop';
import User from './pages/User';
import Login from './pages/Login';
import About from './pages/About';
import TC from './pages/TC';
import Sale from './pages/Sale';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewCollection/:id" element={<ProductPage />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/new-in" element={<NewIn/>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/TermsandConditions" element={< TC />} />
          <Route path="sale" element={<Sale />} />
          <Route path="/wishlist" element={<Wishlist/>} />

        </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
