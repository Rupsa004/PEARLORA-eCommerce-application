import { useEffect, useState } from 'react';

const Bag = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored);
  }, []);

  const removeItem = (id, size) => {
    const updatedCart = cartItems.filter(
      item => !(item.id === id && item.size === size)
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  const total = cartItems.reduce((acc, item) => {
    const numericPrice = Number(item.price.replace(/[₹,]/g, ''));
    return acc + item.quantity * numericPrice;
  }, 0);

  return (
    <div className="min-h-screen pt-28 px-4 sm:px-12 bg-white">
      <h1 className="text-3xl font-bold mb-8">Your Bag</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your bag is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item,index) => (
            <div key={index} className="flex gap-6 items-center border-b pb-4">
              <img src={item.image} alt={item.title} 
              className="w-24 h-28 object-cover rounded border"/>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">
                    {item.price}</p>
                {item.size && <p className="text-sm text-gray-500">Size:{item.size}
                </p>}
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
              <button
                onClick={()=>removeItem(item.id,item.size)}
                className="text-sm text-red-500 hover:underline">
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-8">
            <p className="text-xl font-semibold">Total:{total.toLocaleString()}</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;
