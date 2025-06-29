import { Link } from 'react-router-dom';
import newC1 from '../assets/newC1.jpg';
import newC2 from '../assets/newC2.jpg';
import newC3 from '../assets/newC3.jpg';
import newC4 from '../assets/newC4.jpg';
import newC5 from '../assets/newC5.jpg';
import newC6 from '../assets/newC6.jpg';
import newC7 from '../assets/newC7.jpg';
import newC8 from '../assets/newC8.jpg';


const New=[
    {
        id:1,  image:newC1,  title:'Floral Fusion Suit',    
    },
    {
        id:2,  image:newC2,  title:'Pastel Flower Saree',
    },
    {
        id:3,  image:newC3,  title:'Lotus Pink Suit',
    },
    {
        id:4,  image:newC4,  title:' Indo Power Suit',
    },
    {
        id:5,  image:newC5,  title:'Shirt Style Saree',
    },
    {
        id:6,  image:newC6,  title:' Boho Long Shrug Look',
    },
    {
        id:7,  image:newC7,  title:'Embroidered Sharara',
    },
    {
        id:8,  image:newC8,  title:'Elegant Simplicity Gown',
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