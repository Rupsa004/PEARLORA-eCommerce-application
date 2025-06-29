import { Link } from 'react-router-dom';
import NewC1 from '../assets/NewC1.jpg';
import NewC2 from '../assets/NewC2.jpg';
import NewC3 from '../assets/NewC3.jpg';
import NewC4 from '../assets/NewC4.jpg';
import NewC5 from '../assets/NewC5.jpg';
import NewC6 from '../assets/NewC6.jpg';
import NewC7 from '../assets/NewC7.jpg';
import NewC8 from '../assets/NewC8.jpg';


const New=[
    {
        id:1,  image:NewC1,  title:'Floral Fusion Suit',    
    },
    {
        id:2,  image:NewC2,  title:'Pastel Flower Saree',
    },
    {
        id:3,  image:NewC3,  title:'Lotus Pink Suit',
    },
    {
        id:4,  image:NewC4,  title:' Indo Power Suit',
    },
    {
        id:5,  image:NewC5,  title:'Shirt Style Saree',
    },
    {
        id:6,  image:NewC6,  title:' Boho Long Shrug Look',
    },
    {
        id:7,  image:NewC7,  title:'Embroidered Sharara',
    },
    {
        
        id:8,  image:NewC8,  title:'Elegant Simplicity Gown',
    },
];

const NewCollection=()=>{

    return(
       <section className="py-10 sm:py-16">
  <h2 className="text-3xl font-bold text-center mb-4">New Collection</h2>
  <p className="text-center text-gray-500 mb-6">New Season, Fresh Styles</p>

  <div className="overflow-x-auto snap-x snap-mandatory px-4">
    <div className="flex gap-6 w-max mx-auto">
      {New.map((item, index) => (
        <a
          key={index}
          href={`/NewCollection/${item.id}`}
          className="snap-center shrink-0 w-[200px] md:w-[220px] bg-white rounded-lg shadow-md hover:scale-90 hover:shadow-2xl cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[360px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-center">
            <h3 className="text-md font-semibold text-black">{item.title}</h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section> 
    )
}
export default NewCollection;