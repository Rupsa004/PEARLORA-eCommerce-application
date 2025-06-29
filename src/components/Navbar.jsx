import {useState} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CircleUserRound, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
const Navbar = ({ onCategoryClick }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
        <div className="bg-black bg-opacity-50 text-white text-xs text-center py-2 px-4 flex justify-center items-center space-x-4">
        <motion.div
          className="whitespace-nowrap flex gap-16"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 15,
          }}
        >
          <h4>FREE SHIPPING FOR ORDERS ₹990+</h4>
          <h4>15% OFF ON ALL CLOTHING</h4>
          <h4>EASY RETURNS & FREE PICK UP</h4>
        </motion.div>
      </div>

   
      <nav className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 backdrop-blur-sm bg-white/15 border-b border-white/20 text-black relative">
  
  <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
    <li className="cursor-pointer hover:text-gray-600" onClick={onCategoryClick}>CATEGORIES</li>
    <li className="cursor-pointer hover:text-gray-600"><HashLink smooth to="/#hero">HOME</HashLink></li>
    <li className="cursor-pointer hover:text-gray-600"><RouterLink to="/shop">SHOP</RouterLink></li>
    <li className="cursor-pointer hover:text-gray-600"><RouterLink to="/sale">SALE</RouterLink></li>
    <li className="cursor-pointer hover:text-gray-600"><RouterLink to="/new-in">NEW IN</RouterLink></li>
  </ul>


  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <RouterLink
      to="/"
      className="text-xl font-bold tracking-widest text-black"
      style={{ fontFamily: "Urbanist" }}>
      PEARLORA~
    </RouterLink>
  </div>

  <div className="flex items-center gap-4 text-black ml-auto">
    <CircleUserRound size={24} className="cursor-pointer"
    onClick={() => navigate('/user')}  />
    <Heart size={20} className="cursor-pointer"
    onClick={()=>navigate('/wishlist')} />
    <ShoppingBag
      size={20}
      className="cursor-pointer"
      onClick={() => navigate('/bag')} />
 
    <div className="lg:hidden">
      <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>
</nav>

      {isMobileMenuOpen && (
  <div className="lg:hidden absolute top-full left-0 w-full bg-white text-black p-4 shadow-sm z-40">
    <ul className="flex flex-col items-start space-y-2">
      <li
        className="cursor-pointer hover:text-gray-600"
        onClick={() => {
          onCategoryClick();
          setMobileMenuOpen(false);
        }}>
        CATEGORIES
      </li>
      <li className="cursor-pointer hover:text-gray-600">
        <HashLink smooth to="/#hero" onClick={() => setMobileMenuOpen(false)}>
          HOME
        </HashLink>
      </li>
      <li className="cursor-pointer hover:text-gray-600">
        <RouterLink to="/shop" onClick={() => setMobileMenuOpen(false)}>
          SHOP
        </RouterLink>
      </li>
      <li className="cursor-pointer hover:text-gray-600"> <RouterLink to="/shop" onClick={() => setMobileMenuOpen(false)}>
        SALE
        </RouterLink>
      </li>
      <li className="cursor-pointer hover:text-gray-600">
        <RouterLink to="/new-in" onClick={() => setMobileMenuOpen(false)}>
          NEW IN
        </RouterLink>
      </li>
    </ul>
  </div>
)}

    </div>
  );
};
export default Navbar;
