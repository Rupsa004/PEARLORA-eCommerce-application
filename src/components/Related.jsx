import Related1 from '../assets/related1.jpg';
import Related2 from '../assets/related2.jpg';
import Related3 from '../assets/related3.jpg';
import Related4 from '../assets/related4.jpg';

const Related = () => {
  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-6">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div className="overflow-hidden rounded-md shadow-lg 
          hover:scale-95 hover:shadow-2xl  transition-shadow duration-300 cursor-pointer">
          <img src={Related1} alt="Related 1" className="w-full h-56 object-cover" />
        </div>
 
        <div className="overflow-hidden rounded-md shadow-lg 
          hover:scale-95 hover:shadow-2xl  transition-shadow duration-300 cursor-pointer">
          <img src={Related2} alt="Related 2" className="w-full h-56 object-cover" />
        </div>
      
        <div className="overflow-hidden rounded-md shadow-lg 
          hover:scale-95 hover:shadow-2xl  transition-shadow duration-300 cursor-pointer">
          <img src={Related3} alt="Related 3" className="w-full h-56 object-cover" />
        </div>

        <div className="overflow-hidden rounded-md shadow-lg 
          hover:scale-95 hover:shadow-2xl  transition-shadow duration-300 cursor-pointer">
          <img src={Related4} alt="Related 4" className="w-full h-56 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Related;
