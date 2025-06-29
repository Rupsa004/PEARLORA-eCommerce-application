import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Related from '../components/Related';
import { Star } from 'lucide-react';


import newc1 from '../assets/newc1.jpg';
import newc2 from '../assets/newc2.jpg';
import newc3 from '../assets/newc3.jpg';
import newc4 from '../assets/newc4.jpg';
import newc5 from '../assets/newc5.jpg';
import newc6 from '../assets/newc6.jpg';
import newc7 from '../assets/newc7.jpg';
import newc8 from '../assets/newc8.jpg';
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
import shop1 from '../assets/shop1.jpg';
import shop2 from '../assets/shop2.jpg';
import shop3 from '../assets/shop3.jpg';
import shop4 from '../assets/shop4.jpg';
import shop5 from '../assets/shop5.jpg';
import shop6 from '../assets/shop6.jpg';
import shop7 from '../assets/shop7.jpg';
import shop8 from '../assets/shop8.jpg';
import shop9 from '../assets/shop9.jpg';
import shop10 from '../assets/shop10.jpg';
import shop11 from '../assets/shop11.jpg';
import shop12 from '../assets/shop12.jpg';
import shop13 from '../assets/shop13.jpg';
import shop14 from '../assets/shop14.jpg';
import shop15 from '../assets/shop15.jpg';
import shop16 from '../assets/shop16.jpg';


const New = [
  {  id:1,
    image: newC1, title: 'Floral Fusion Suit', price: '₹1,499', color: 'Peach', rating: 4.6, description: 'Elegant floral embroidery on pastel tone.',
    details: 
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Chiffon</li>
      <li>Occasion: Festival wear</li>
      <li>Care: Dry Clean only</li>
      <li>Fit: Relax fit</li>
    </ul> , 
    hasSizes: true },
  { id:2,
    image: newC2, title: 'Pastel Flower Saree', price: '₹1,999', color: 'Pastel Pink',rating: 4.5, description: 'Soft chiffon saree with floral design.', 
    details: 
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Organza</li>
      <li>Occasion: Party/Wedding/Evening/Event,Type- Party Wear</li>
      <li>Care: Dry Clean only</li>
      <li>About: 5.5 mtr saree & 0.8 mtr blouse, Free Size.
          Blouse piece length: 0.8 m,
          Saree length: 5.5 m </li>
    </ul> , 
    hasSizes: false },
  {  id:3,
    image: newC3,title: 'Lotus Pink Suit', price: '₹1,085', color: 'Lotus Pink',rating: 4.4, description: 'Festive suit in pink with lotus patterns.', 
    details: 
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Raw silk</li>
      <li>Occasion: Casual</li>
      <li>Care: Hand wash</li>
      <li>Fit: Realax fit</li>
    </ul> , 
    hasSizes: true },
  { id:4,
    image: newC4, title: 'Indo Power Suit', price: '₹2,599', color: 'Maroon',rating: 4.6, description: 'Indo-western suit perfect for power dressing.',
    details: 
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton silk, Beads,Embroidered,Thread</li>
      <li>Occasion: Partywear</li>
      <li>Care: Dry Clean Only</li>
      <li>Fit: Realax fit</li>
    </ul> ,  
    hasSizes: true },
  { id:5, 
    image: newC5, title: 'Shirt Style Saree', price: '₹1,699', color: 'Mustard',rating: 4.4, description: 'Bold shirt-style paired with traditional saree.', 
    details: 
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:  Cotton & Acrylic</li>
      <li>Occasion: Party/Evening/Event</li>
      <li>Care: Dry Clean only</li>
      <li> Saree length: 6.5 m </li>
    </ul> , 
    hasSizes: false },
  { id:6,
    image: newC6, title: 'Boho Long Shrug Look', price: '₹2,049', color: 'Ivory',rating: 4.3, description: 'Bohemian vibes with this long shrug and inner wear.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton</li>
      <li>Occasion: Casual</li>
      <li>Care: Hand wash</li>
      <li>Fit: Realax fit</li>
    </ul> ,   
    hasSizes: true },
  { id:7,
    image: newC7, title: 'Embroidered Sharara', price: '₹2,749', color: 'Navy Blue',rating: 4.7, description: 'Heavy embroidery with flare for occasions.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Paper silk</li>
      <li>Occasion: Party/Wedding/Evening/Event, Type- Party Wear</li>
      <li>Care: Dry Clean only</li>
      <li>About:This embroidered sharara set is a festive dream come true</li>
    </ul> , 
     hasSizes: true },
  { id:8,
    image: newC8, title: 'Elegant Simplicity Gown', price: '₹2,199', color: 'Mustard Yellow',rating: 4.8, description: 'Simple yet elegant evening gown.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Benarasi</li>
      <li>Occasion: Casual/Partywear</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Realax fit, Maxi length </li>
    </ul> ,   
    hasSizes: true },
    { id:9,
      image:HC1, title:' Midnight Khadi Saree', price: '₹1,099',color: 'Midnight Blue', rating:4.5,description: 'Soft, Simple Saree.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Handloom</li>
      <li>Occasion: Office/Event/Regular</li>
      <li>Care: Handwash</li>
      <li> Saree length: 6.5 m long</li>
    </ul> ,   
    hasSizes: false },
    { id:10,
      image:HC2, title:'Rust Royale Jacket Set', price: '₹1,399', color: 'Orange', rating:4.4, description: 'Organza Silk.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Organza,Georgette</li>
      <li>Occasion: Partywear</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Heavy Wear , Embroidered set </li>
    </ul> ,   
    hasSizes: true },
    { id:11,
      image:HC3, title:'Maroon Zari Corset & Drape Skirt', price: '₹1,499', color: 'Deep Maroon with Gold Embroidery and Champagne Beige',rating:4.7,description: 'Perfect for making a graceful statement at festive evenings.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Brocade,Satin Silk Blend </li>
      <li>Occasion: Festive/Partywear</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Realax fit, Structured </li>
    </ul> ,   
    hasSizes: true  },
    { id:12,
      image:HC4, title:'Indigo Wrap Skirt Co-ord', price: '₹899', color: 'Navy Blue Shirt and Printed Slit Skirt',rating:4.4,description: ' Casual elegance at its best.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:Cotton blend</li>
      <li>Occasion: Brunch/Day outings</li>
      <li>Care: Handwash</li>
      <li>Fit: Realax fit</li>
    </ul> ,   
    hasSizes: true  },
    { id:13,
      image:HC5, title:'Terracotta Triangle Slit Dress', price: '₹1,199', color: 'Deep Maroon with beige triangle prints', rating:4.6 ,description: 'A minimal yet bold evening statement piece.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton</li>
      <li>Occasion: Casual/Events</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Realax Slim fit, Maxi length </li>
    </ul> ,   
    hasSizes: true  },
    { id:14,
      image:HC6, title:'Vintage Floral Saree Set', price: '₹1,299', color: 'Printed Blouse with Maroon-White Saree', rating:4.5,description: 'A graceful and rooted ensemble.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton</li>
      <li>Occasion: Casual/Festive</li>
      <li>Care: Handwash</li>
      <li>Fit: Realax fit,Free-style </li>
    </ul> ,   
    hasSizes: false  },
  {   id:15,
      image:HC7, title:'Boho Bandhani Co-ord', price: '₹1,799', color: 'Maroon, Black & GoldEmbroidered', rating:4.4, description: 'Simple yet festive, this ensemble exudes modern ethnic charm.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Embroidered Cotton/Viscose blend, Organza/Chiffon shirt </li>
      <li>Occasion: Festive/Events</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Tailored fit top, relaxed draped bottom </li>
    </ul> ,   
    hasSizes: true  },
  { id:16,
    image:HC8, title:'Retro Bazaar Co-ord Set', price: '₹1,299', color: 'Rust Red with Beige Triangle Motifs',rating:4.8, description: 'Perfect for making a bold statement.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Soft Cotton or Rayon</li>
      <li>Occasion: Art shows/Contemporary weddings</li>
      <li>Care: Dry clean only</li>
      <li>Fit:Bodycon with slit</li>
    </ul> ,   
    hasSizes: true  },
   {id:17,
    image:HC9, title:'Black Gold Boho Dress', price: '₹599', color: 'Jet Black with Mustard Gold', rating:4.5, description: 'A flared black dress with exquisite ethnic embroidery.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:Georgette or Crepe</li>
      <li>Occasion: Casual/Festive/Outing</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Flared fit with cinched waist</li>
    </ul> ,   
    hasSizes: true   },
  { id:18,
    image:HC10, title:' Midnight Blue Anarkali Set', price: '₹2,399', color: 'Navy Blue',rating:4.7, description: 'Understated yet elegant.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:Organza,Cotton Silk</li>
      <li>Occasion: Festive/Partywear/Puja</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Straight fit kurta </li>
    </ul> ,   
    hasSizes: true   },
    { id:19,
    image:PP1, title:'  Mustard Yellow Lehenga Set', price: '₹2,499', color: ' Mustard Yellow', rating:4.6 ,description: 'Graceful and fresh.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Net with embroidery and sequin detailing</li>
      <li>Occasion: Festive/Weddings</li>
      <li>Care: Dry clean only</li>
      <li>Fit:  Fitted bodice </li>
    </ul> ,   
    hasSizes: true   },
    { id:20,
    image:PP2, title:'Red Mekhla', price: '₹1,299', color: 'Red',rating:4.8, description: 'Understated yet elegant.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:cotton-silk blend</li>
      <li>Occasion: Festive/Traditional Celebrations/Morning Wedding</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Draped fit with structured  </li>
    </ul> ,   
    hasSizes: true   },
    {id:21,title:"Red Benarasi",price:"₹2,399",color:"Red with golden",rating:4.6, image:shop1, description: 'A regal red silk saree with golden motifs and zari border, exuding timeless elegance.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Banarasi Silk</li>
      <li>Occasion:  Wedding/Festive</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Free size  </li>
      <li>About: 5.5 mtr saree & 0.8 mtr blouse, Free Size.
          Blouse piece length: 0.8 m,
          Saree length: 5.5 m </li>
    </ul> ,   
    hasSizes: false},
    {id:22,title:"Salwar Kameez",price:"₹1,699",color:"Navy blue and pink",rating:4.4,image:shop2, description: 'A classy navy kurta with pink salwar and dupatta, adorned with golden lace detailing.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton blend</li>
      <li>Occasion:  Semi-formal Events/Festive</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Regular fit</li>
    </ul> ,   
    hasSizes: true},
    {id:23,title:"Co-Ord",price:"₹1,399",color:" Indigo and beige",rating:4.5,image:shop3,description: 'A breezy indigo-printed co-ord set with spaghetti straps and flared pants, perfect for summer chic.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Handblock cotton</li>
      <li>Occasion: Outings/Vacations</li>
      <li>Care:  Cold Wash</li>
      <li>Fit: Relaxed fit</li>
    </ul> ,   
    hasSizes: true},
    {id:24,title:"Sharara Set",price:"₹2,499",color:" Emerald green",rating:4.7,image:shop4,description: ' A statement emerald green velvet ensemble with embellished details.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Velvet with sequin</li>
      <li>Occasion: Party/Evening Events</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Relaxed fit</li>
    </ul> ,   
    hasSizes: true},
    {id:25,title:"Salwar Suits",price:"₹1,799",color:" Light pink kurta and pants, dark pink dupatta ",rating:4.6,image:shop5,description: 'A subtle blush pink kurta set paired with an ornate pink Banarasi dupatta.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton silk, Banarasi silk</li>
      <li>Occasion: Festive/Puja/Events</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Straight fit</li>
    </ul> ,   
    hasSizes: true},
    {id:26,title:"Gown",price:"₹2,099",color:" Rust orange with golden ",rating:4.5,image:shop6, description: 'A majestic rust-orange Banarasi gown with structured pleats and traditional gold zari weaving.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:  Banarasi silk </li>
      <li>Occasion: Festive/Puja/Formal Ethnic Events</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Straight fit</li>
    </ul> ,   
    hasSizes: true},
    {id:27,title:"Peplum Set",price:"₹2,399",color:"Teal with gold ",rating:4.6,image:shop7,description: 'Glamorous teal peplum top and flared pants adorned with intricate gold embroidery.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Silk blend </li>
      <li>Occasion: Festive/Puja/Formal Ethnic Events</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Straight fit, flared pants</li>
    </ul> ,   
    hasSizes: true},
    {id:28,title:"Regular Co-Ord",price:"₹999",color:"  Beige",rating:4.6,image:shop8, description: 'Elegant beige long blazer with intricate embroidery paired with matching flared trousers.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Linen-cotton blend</li>
      <li>Occasion: Festive/Semi-formal events</li>
      <li>Care:  Hand wash</li>
      <li>Fit: Relaxed fit</li>
    </ul> ,   
    hasSizes: true},
    {id:29,title:"Black Co-Ord",price:"₹1,899",color:" Black and gold",rating:4.4,image:shop9, description: 'Black kurta with intricate mirror and threadwork, paired with plain pants.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:  Georgette  </li>
      <li>Occasion: Festive/Formal Ethnic Events</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Straight fit</li>
    </ul> ,   
    hasSizes: true},
    {id:30,title:"Jacket",price:"₹1,099",color:" Maroon",rating:4.6,image:shop10,description: 'A majestic rust-orange Banarasi gown with structured pleats and traditional gold zari weaving.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:  Handloom blend</li>
      <li>Occasion: Festive/ Casual </li>
      <li>Care:   Hand wash</li>
      <li>Fit: Relaxed fit</li>
    </ul> ,   
    hasSizes: true},
    {id:31,title:"Suit Set",price:"₹3,399",color:" Maroon with gold ",rating:4.6,image:shop11,description: 'Maroon bralette and flared pants paired with a matching full-length printed jacket.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:   Cotton silk blend</li>
      <li>Occasion: Indo-western parties/Formal Ethnic Events</li>
      <li>Care:  Dry clean only</li>
      <li>Fit: Relaxed fit</li>
    </ul> ,   
    hasSizes: true},
    {id:32,title:"Sambalpuri Saree",price:"₹1,499",color:" Red, black, and off-white",rating:4.9,image:shop12,description: 'Traditional red and black saree with intricate ethnic patterns .',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:  Handloom cotton  </li>
      <li>Occasion: Festive/Puja/Cultural events</li>
      <li>Care: Hand wash or Dry clean only</li>
      <li>Fit:Standard saree drape</li>
      <li>Saree length: 6.5 m </li>
    </ul> ,   
    hasSizes: false},
    { id: 33, title: "Tunic", price: "₹999",color:"Mustard Yellow", rating: 4.8, image: shop13,description: ' A flowy mustard long tunic featuring colorful ethnic embroidery and a deep V neckline .',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric:  Cotton gauze  </li>
      <li>Occasion: Festive/Casual outings</li>
      <li>Care: Dry clean only</li>
      <li>Fit:Relaxed fit</li>
    </ul> ,   
    hasSizes: true  },
    { id: 34, title: "Cropped Shirt", price: "₹599", color:"Lilac and Gold ",rating: 4.9, image: shop14, description: 'A cropped lilac shirt featuring a double-breasted collar and golden brocade border on the hem and sleeves .',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton silk </li>
      <li>Occasion: Indo-western gatherings/Casual outings</li>
      <li>Care: Cold hand wash</li>
      <li>Fit: Cropped fit </li>
    </ul> ,   
    hasSizes: true  },
    { id: 35, title: "Flared Lehenga", price: "₹2,699", color:"Ivory and Red", rating: 4.7, image: shop15, description: 'Traditional ivory peplum kurta with red thread embroidery and gota tassels, styled with a coordinating lehenga skirt and red dupatta.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Cotton silk </li>
      <li>Occasion: Festive functions/Traditional ceremonies</li>
      <li>Care: Dry clean only</li>
      <li>Fit: Structured peplum top with a flared lehenga </li>
    </ul> ,   
    hasSizes: true  },
    { id: 36, title: "Peplum Top", price: "₹699", color:"Fuchsia ", rating: 4.6, image: shop16, description: 'A contemporary sleeveless kurta Top.',
    details:
    <ul className='list-disc pl-5 text-sm text-gray-600'>
      <li>Fabric: Silk blend </li>
      <li>Occasion: Formal ethnic styling/Contemporary festive events</li>
      <li>Care: Dry clean only</li>
      <li>Fit: SStructured top</li>
    </ul> ,   
    hasSizes: true   },
         
];



const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [addedToCart, setAddedToCart] = useState(false); 
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const product = New.find((item) => item.id === Number(id));
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
      size: product.hasSizes?selectedSize:null,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const alreadyInCart = existingCart.find(
      (item) => item.id === cartItem.id && item.size === cartItem.size
    );

    if (alreadyInCart) {
      alreadyInCart.quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setAddedToCart(true);
    navigate('/bag');
  };

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product is not Available</p>;
  }

  return (
    <>
    <div className="max-w-screen-xl mx-auto px-0 py-40 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex flex-row md:flex-col gap-2 justify-left md:justify-start order-2 md:order-1 w-full md:w-auto mt-4 ml-4">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt="Thumb"
              className="w-20 h-25 object-cover rounded border hover:scale-105 transition"
            />
          ))}
        </div>
        <div className="order-1 md:order-2  w-full flex justify-left ml-4">
          <img src={product.image} alt={product.title} className="w-100 h-auto rounded-lg border mt-4" />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
        <p className="text-sm text-gray-500">COLOR: <span className="font-medium">{product.color}</span></p>

        {product.hasSizes && (
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">Size:</label>
            <select className="border px-3 py-1 rounded"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        )}

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Quantity:</label>
          <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-16 border px-2 py-1 rounded"
        />
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
        {addedToCart ? 'Go to Bag':'Add to Cart'}
        </button>

        <div>
          <h4 className="text-md font-semibold">Description</h4>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{product.description}</p>
        </div>
        <div>
          <h4 className='text-md font-semibold'>Details</h4>
          <p className='text-sm text-gray-800 mt-1 Leading-relaxed'>{product.details}</p>
        </div>


        <div className="pt-10 border-t">
          <h4 className="text-lg font-semibold mb-4">Ratings</h4> 
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
    
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-yellow-600">
                <p className="text-4xl font-bold text-gray-800">{product.rating}</p>
                <Star size={20} fill="currentColor" className="text-yellow-500 mt-1" />
                </div>

                    <p className="text-sm text-gray-500">21 Customers</p>
              </div>
        <div className="w-full max-w-md space-y-2">
          {[{star: 5, percent: 33}, {star: 4, percent: 14}, {star: 3, percent: 14}, {star: 2, percent: 9}, {star: 1, percent: 28}].map(({star, percent}) => 
          (
        <div key={star} className="flex items-center gap-2 text-sm">
          <div className="w-6 flex items-center">
          <span className="mr-1">{star}</span>
          <div className="flex items-center text-sm text-yellow-600 font-medium gap-1">
                  <Star size={12} fill="currentColor" />            
                </div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="bg-yellow-500 h-2 rounded" style={{ width: `${percent}%` }}></div>
          </div>
          <span className="w-10 text-right">{percent}%</span>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
    <Related />
    </>
  );
};
export default ProductPage;
