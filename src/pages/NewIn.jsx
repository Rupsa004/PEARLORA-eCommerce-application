import { Link } from 'react-router-dom';
import { Star, Heart } from "lucide-react";
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import HC1 from '../assets/HC1.jpg'; 
import HC2 from '../assets/HC2.jpg';
import HC3 from '../assets/HC3.jpg';
import HC4 from '../assets/HC4.jpg';
import HC5 from '../assets/HC5.jpg';
import HC6 from '../assets/HC6.jpg';
import HC7 from '../assets/HC7.jpg';
import HC8 from '../assets/HC8.jpg';
import HC9 from '../assets/HC9.jpg';
import HC10 from '../assets/HC10.jpg';
import PP1 from '../assets/PP1.jpg';
import PP2 from '../assets/PP2.jpg';

const products = [
{ id:9, image:HC1, title:' Midnight Khadi Saree', category: 'Minimal Ethnic | Sustainable Picks', price: '₹1,099', rating:4.5 },
{  id:10, image:HC2, title:'Rust Royale Jacket Set', category: 'Indo-Western | Festive', price: '₹1399',  rating:4.4  },
{  id:11, image:HC3, title:'Maroon Zari Corset & Drape Skirt', category: 'Modern Ethnic | Party Wear', price: '₹1,499', rating:4.7 },
{  id:12, image:HC4, title:'Indigo Wrap Skirt Co-ord', category: 'Indian Ethnic | Statement Sarees', price: '₹899', rating:4.4  },
{  id:13, image:HC5, title:'Terracotta Triangle Slit Dress', category: 'Western Wear | Casual Chic', price: '₹1,199', rating:4.6 },
{  id:14, image:HC6, title:'Vintage Floral Saree Set', category: ' Indian Ethnic | Statement Sarees', price: '₹1,299',  rating:4.5 },
{  id:15, image:HC7, title:'Boho Bandhani Co-ord', category: 'Indie Fusion | Festive Cool',  price: '₹1,799', rating:4.4 },
{  id:16, image:HC8, title:'Retro Bazaar Co-ord Set', category: 'Bohemian | Vacation Edit', price: '₹1,299', rating:4.8 },
{  id:17, image:HC9, title:'Black Gold Boho Dress', category: 'Bohemian | Casual Chic', price: '₹599', rating:4.5},
{  id:18, image:HC10, title:' Midnight Blue Anarkali Set', category: 'Indian Ethnic | Festive Wear', price: '₹2,399', rating:4.7 },
{ id:19, image:PP1, title:' Mustard Yellow Lehenga Set',category: 'Indian Ethnic | Festive Wear', price: '₹2,499', rating:4.6 },
{ id:20, image:PP2, title:'Red Mekhla', category: 'Indian Ethnic | Mekhla Saree', price: '₹1,299', rating:4.8 },

];

const NewIn = () => {
  const [wishlist, setWishlist] = useState(() => {
      const stored = localStorage.getItem("wishlist");
      return stored ? JSON.parse(stored) : [];
    });
  const isWishlisted = (id) => wishlist.some((item) => item.id === id);
  const toggleWishlist = (product) => {
    const simplified = {
      id: product.id,
      title: product.title,
      price: product.price,
      rating: product.rating,
      image: product.image,
    };
   let updated;
    if (isWishlisted(product.id)) {
      updated = wishlist.filter((item) => item.id !== product.id);
    } else {
      updated = [...wishlist, simplified];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };


  return (
    <div className="min-h-screen bg-white pt-24">
     
      <div className="relative overflow-hidden bg-white py-6">
        <motion.div
          className="whitespace-nowrap text-2xl font-semibold text-black"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          {Array(10).fill('NEW IN').map((text, idx) => (
            <span className="mx-15 inline-block" key={idx}>{text}</span>
          ))}
        </motion.div>
      </div>
      
      <div className="flex px-6 py-8 gap-6 justify-center">
        
        <main className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">Discover Our Newest Collection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-2">
            {products.map((product) => (
              <div key={product.id}className="relative rounded-lg overflow-hidden shadow-lg 
                hover:scale-95 hover:shadow-2xl  transition-shadow duration-300 cursor-pointer w-full max-w-[240px]">  
                <button
                onClick={(e)=>{
                e.preventDefault();
                toggleWishlist(product);}}
                className="absolute top-3 right-3 z-10 cursor-pointer ">
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted(product.id)
                      ? 'text-red-500 fill-red-500'
                      : 'text-gray-400'
                  } hover:text-red-500 hover:fill-red-500`}
                />
              </button>

              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-sm text-gray-500">{product.price}</p>
                  {product.rating && (
                  <div className="flex items-center text-sm text-yellow-600 font-medium gap-1 mt-1">
                  <Star size={16} fill="currentColor" />
                  {product.rating}
                  </div>
                  )}
                </div>
              </Link>
            </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewIn;

