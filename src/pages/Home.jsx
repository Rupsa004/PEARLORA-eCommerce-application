import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewCollection from '../components/NewCollection';
import Offer from '../components/Offer';
import HotCategories from '../components/HotCategories';
import Category from '../components/Category';
import BannerCom from '../components/BannerCom';

const Home = () => {
  const [showCategory, setShowCategory] = useState(false);
  const handleCategoryClick = () => {
    setShowCategory(true);
  };
  const handleCloseCategory = () => {
    setShowCategory(false);
  };

  return (
    <div className="relative">
      <Navbar onCategoryClick={handleCategoryClick} />
      {showCategory && <Category onClose={handleCloseCategory} />}

      <Hero />
      <NewCollection />
      <div className="flex justify-center items-center min-h-screen">
      <Offer />
      </div>
      <HotCategories />
      <BannerCom />
    </div>
  );
};

export default Home;
