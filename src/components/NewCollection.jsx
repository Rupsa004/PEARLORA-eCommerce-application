import { Link } from 'react-router-dom';
import newc1 from '../assets/newc1.jpg';
import newc2 from '../assets/newc2.jpg';
import newc3 from '../assets/newc3.jpg';
import newc4 from '../assets/newc4.jpg';
import newc5 from '../assets/newc5.jpg';
import newc6 from '../assets/newc6.jpg';
import newc7 from '../assets/newc7.jpg';
import newc8 from '../assets/newc8.jpg';


const New=[
    {
        id:1,  image:newc1,  title:'Floral Fusion Suit',    
    },
    {
        id:2,  image:newc2,  title:'Pastel Flower Saree',
    },
    {
        id:3,  image:newc3,  title:'Lotus Pink Suit',
    },
    {
        id:4,  image:newc4,  title:' Indo Power Suit',
    },
    {
        id:5,  image:newc5,  title:'Shirt Style Saree',
    },
    {
        id:6,  image:newc6,  title:' Boho Long Shrug Look',
    },
    {
        id:7,  image:newc7,  title:'Embroidered Sharara',
    },
    {
        id:8,  image:newc8,  title:'Elegant Simplicity Gown',
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
          href={`/newCollection/${item.id}`}
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