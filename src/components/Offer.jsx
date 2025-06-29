import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';

const Offer = () => {
  return (
    <section className="px-2 py-2 mt-0 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Found Nowhere Else</h2>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        <div className="md:col-span-2 relative sm:h-96 md:h-[560px]">
          <img src={offer1} alt="offer 1" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white bg-black/40 rounded-lg">
            <h3 className="text-xl md:text-3xl font-bold">Seasonal 50% OFF</h3>
            <p className="text-sm md:text-base mb-4">Women Collection</p>
            <button className="bg-white text-black px-4 py-2 text-sm font-semibold rounded hover:bg-gray-400">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative md:h-[240px] sm:h-72">
            <img src={offer2} alt="offer 2" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 pt-15 text-white bg-black/40 rounded-lg">
              <h4 className="text-md md:text-lg font-bold">UPTO 15% OFF</h4>
              <h5 className="text-sm mb-2">Trendy Fashion</h5>
              <button className="bg-white text-black px-3 py-1 text-xs font-medium rounded hover:bg-gray-400">
                SHOP NOW
              </button>
            </div>
          </div>
  
          <div className="relative md:h-[310px] sm:h-68">
            <img src={offer3} alt="offer 3" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white bg-black/40 rounded-lg">
              <h4 className="text-md md:text-lg font-bold">FLAT 30% OFF</h4>
              <p className="text-sm mb-2">Gorgeous Jacket</p>
              <button className="bg-white text-black px-3 py-1 text-xs font-medium rounded hover:bg-gray-400">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
