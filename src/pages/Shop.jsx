import { Link } from 'react-router-dom';
import { Star, Heart } from "lucide-react";
import { useEffect, useState } from 'react';


import shop1 from '../assets/Shop1.jpg';
import shop2 from '../assets/Shop2.jpg';
import shop3 from '../assets/Shop3.jpg';
import shop4 from '../assets/Shop4.jpg';
import shop5 from '../assets/Shop5.jpg';
import shop6 from '../assets/Shop6.jpg';
import shop7 from '../assets/Shop7.jpg';
import shop8 from '../assets/Shop8.jpg';
import shop9 from '../assets/Shop9.jpg';
import shop10 from '../assets/Shop10.jpg';
import shop11 from '../assets/Shop11.jpg';
import shop12 from '../assets/Shop12.jpg';
import shop13 from '../assets/Shop13.jpg';
import shop14 from '../assets/Shop14.jpg';
import shop15 from '../assets/Shop15.jpg';
import shop16 from '../assets/Shop16.jpg';


const products = [
  { id: 21, title: "Red Benarasi", price: "₹2,399", rating: 4.6, image: shop1, category: "Sarees" },
  { id: 22, title: "Salwar Kameez", price: "₹1,699", rating: 4.4, image: shop2,category: "Salwars" },
  { id: 23, title: "Co-Ord", price: "₹1,399", rating: 4.5, image: shop3,category: "Co-Ord Set" },
  { id: 24, title: "Sharara Set", price: "₹2,499", rating: 4.7, image: shop4,category: "Sharara" },
  { id: 25, title: "Salwar Suits", price: "₹1,799", rating: 4.6, image: shop5 ,category: "Salwars"},
  { id: 26, title: "Gown", price: "₹2,099", rating: 4.5, image: shop6,category: "Dresses & Gown" },
  { id: 27, title: "Two Piece", price: "₹2,399", rating: 4.6, image: shop7, category: "Boho set"  },
  { id: 28, title: "Regular Co-Ord", price: "₹999", rating: 4.6, image: shop8,category: "Co-Ord Set" },
  { id: 29, title: "Black Co-Ord", price: "₹1,899", rating: 4.4, image: shop9, category: "Co-Ord Set" },
  { id: 30, title: "Jacket", price: "₹1,099", rating: 4.6, image: shop10, category: "Jackets & Shrugs"  },
  { id: 31, title: "Suit Set", price: "₹3,399", rating: 4.6, image: shop11, category: "Kurta Suit Sets" },
  { id: 32, title: "Sambalpuri Saree", price: "₹1,499", rating: 4.9, image: shop12, category: "Sarees" },
  { id: 33, title: "Tunic", price: "₹999", rating: 4.8, image: shop13, category: "Tunics & Bottom wear" },
  { id: 34, title: "Cropped Shirt", price: "₹599", rating: 4.9, image: shop14, category: "Shirt" },
  { id: 35, title: "Flared Lehenga", price: "₹2,699", rating: 4.7, image: shop15, category: "Lahenga-Choli" },
  { id: 36, title: "Peplum Top", price: "₹699", rating: 4.6, image: shop16, category: "Tops" },

];

const Shop = () => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [sortBy, setSortBy] = useState("relevant");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  const toggleWishlist = (product) => {
    const simplifiedProduct = {
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
      updated = [...wishlist, simplifiedProduct];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };


  const sortedProducts = [...products].sort((a, b) => {
    const getPrice = (price) => parseFloat(price.replace(/[₹,]/g, ""));
    if (sortBy === "priceLowToHigh") return getPrice(a.price) - getPrice(b.price);
    if (sortBy === "priceHighToLow") return getPrice(b.price) - getPrice(a.price);
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });
  const filteredProducts =
  selectedCategory === "All Products"
    ? sortedProducts
    : sortedProducts.filter((product) => product.category === selectedCategory);


  const categories = [
    "All Products", "Kurta Suit Sets", "Dresses & Gown", "Salwars",
    "Sarees", "Lahenga-Choli", "Tunics & Bottom wear", "Co-Ord Set",
    "Jackets & Shrugs", "Shirts", "Tops", "Boho set"
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-40 sm:w-52 md:w-64 bg-gray-100 p-4 sm:p-6 shadow-md mt-20">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Shop by Category</h2>
        <div className="space-y-3">
          {categories.map((category, idx) => (
            <div key={idx}
            onClick={()=>setSelectedCategory(category)} className={`cursor-pointer px-3 py-2 text-sm transition rounded-lg ${selectedCategory===category ? "bg-black text-white" : "text-gray-700 hover:bg-black hover:text-white"}`}>
              {category}
            </div>
          ))}
        </div>
      </aside>


      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mt-20 mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mt-20">Shop Now</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded p-2 text-sm"
          >
            <option value="relevant">Sort by: Most Relevant</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow relative transition duration-300">
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 z-10 cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted(product.id)
                      ? 'text-red-500 fill-red-500'
                      : 'text-gray-400'
                  } hover:text-red-500 hover:fill-red-500`}
                />
              </button>

              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-76 h-90 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                  <p className="text-black font-bold mb-1">{product.price}</p>
                  <div className="flex items-center text-sm text-yellow-600 font-medium gap-1">
                    <Star size={16} fill="currentColor" />
                    {product.rating}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Shop;
