import { useNavigate } from 'react-router-dom';
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


const New=[
    {image:HC1,title:' Midnight Khadi Saree',category: 'Minimal Ethnic | Sustainable Picks', },
    {image:HC2,title:'Rust Royale Jacket Set',category: 'Indo-Western | Festive',  },
    {image:HC3,title:'Maroon Zari Corset & Drape Skirt',category: 'Modern Ethnic | Party Wear',  },
    {image:HC4,title:'Indigo Wrap Skirt Co-ord',category: 'Indian Ethnic | Statement Sarees',  },
    {image:HC5,title:'Terracotta Triangle Slit Dress',category: 'Western Wear | Casual Chic',  },
    {image:HC6,title:'Vintage Floral Saree Set',category: ' Indian Ethnic | Statement Sarees',  },
    {image:HC7,title:'Boho Bandhani Co-ord',category: 'Indie Fusion | Festive Cool',  },
    {image:HC8,title:'Retro Bazaar Co-ord Set',category: 'Bohemian | Vacation Edit',  },
    {image:HC9,title:'Black Gold Boho Dress',category: 'Bohemian | Casual Chic',  },
    { image:HC10,title:' Midnight Blue Anarkali Set',category: 'BIndian Ethnic | Festive Wear',  },
]

const HotCategories=()=>{
    const navigate = useNavigate();
    return(
       <section className="w-full py-10 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Hot Categories</h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
    {New.map((item, index) => (
      <div
        key={index}
        onClick={() => navigate('/new-in')}
        className="bg-white rounded-lg p-4 w-full sm:w-[200px] mx-auto flex flex-col items-center justify-center shadow-lg 
        hover:scale-95 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[240px] object-cover mb-2 rounded-lg"
        />
        <p className="text-base font-semibold">{item.title}</p>
        <p className="text-sm text-gray-500">{item.category}</p>
      </div>
    ))}
  </div>
</section>

    );
};
export default HotCategories;