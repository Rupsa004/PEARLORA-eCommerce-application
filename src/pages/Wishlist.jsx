import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    setWishlist(stored ? JSON.parse(stored) : []);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen pt-28 px-4 sm:px-12 bg-white">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 ">Your wishlist is empty.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow relative">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute bottom-3 right-3 text-black-600 hover:text-gray-800"
              >
                <Trash2 size={18} />
              </button>

              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-76 h-90 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-black font-bold mb-1">{item.price}</p>
                  <div className="flex items-center text-sm text-yellow-600 font-medium gap-1">
                    <Star size={16} fill="currentColor" />
                    {item.rating}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Wishlist;
