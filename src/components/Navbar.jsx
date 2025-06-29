import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CircleUserRound, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ onCategoryClick }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 left-0 z-50 overflow-x-hidden">
      <div className="bg-black text-white text-xs text-center py-2 px-4 overflow-hidden">
        <motion.div
          className="whitespace-nowrap flex gap-8"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
        >
          <span>FREE SHIPPING FOR ORDERS ₹990+</span>
          <span>15% OFF ON ALL CLOTHING</span>
          <span>EASY RETURNS & FREE PICK UP</span>
        </motion.div>
      </div>

      <nav className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 bg-white border-b border-gray-200 shadow-sm relative">
        <div className="flex items-center gap-4">
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

    <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
      <li className="cursor-pointer hover:text-gray-600" onClick={onCategoryClick}>CATEGORIES</li>
      <li className="cursor-pointer hover:text-gray-600"><HashLink smooth to="/#hero">HOME</HashLink></li>
      <li className="cursor-pointer hover:text-gray-600"><RouterLink to="/shop">SHOP</RouterLink></li>
      <li className="cursor-pointer hover:text-gray-600"><RouterLink to="/sale">SALE</RouterLink></li>
      <li className="cursor-pointer hover:text-gray-600"><RouterLink to="/new-in">NEW IN</RouterLink></li>
    </ul>
  </div>

  <RouterLink
    to="/"
    className="text-xl font-bold tracking-widest text-black absolute left-1/2 transform -translate-x-1/2"
    style={{ fontFamily: "Urbanist" }}>
    PEARLORA~
  </RouterLink>

  <div className="flex items-center gap-4 text-black ml-auto">
    <CircleUserRound size={24} className="cursor-pointer" onClick={() => navigate('/user')} />
    <Heart size={20} className="cursor-pointer" onClick={() => navigate('/wishlist')} />
    <ShoppingBag size={20} className="cursor-pointer" onClick={() => navigate('/bag')} />
  </div>
</nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white text-black p-4 shadow-sm z-40">
          <ul className="flex flex-col items-start space-y-2 text-sm font-semibold">
            <li
              className="cursor-pointer hover:text-gray-600"
              onClick={() => {
                onCategoryClick();
                setMobileMenuOpen(false);
              }}>
              CATEGORIES
            </li>
            <li className="cursor-pointer hover:text-gray-600">
              <HashLink smooth to="/#hero" onClick={() => setMobileMenuOpen(false)}>HOME</HashLink>
            </li>
            <li className="cursor-pointer hover:text-gray-600">
              <RouterLink to="/shop" onClick={() => setMobileMenuOpen(false)}>SHOP</RouterLink>
            </li>
            <li className="cursor-pointer hover:text-gray-600">
              <RouterLink to="/sale" onClick={() => setMobileMenuOpen(false)}>SALE</RouterLink>
            </li>
            <li className="cursor-pointer hover:text-gray-600">
              <RouterLink to="/new-in" onClick={() => setMobileMenuOpen(false)}>NEW IN</RouterLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
