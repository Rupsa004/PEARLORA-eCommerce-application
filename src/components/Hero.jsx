import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';


const Hero = () => {

    const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const slides=[slide1,slide2,slide3];

  return (
    <section id='hero' className="w-full h-auto bg-white">
        <Slider {...settings} className='w-full h-full'>
            {slides.map((slide, index) => (
          <div key={index} className="w-full h-[90vh] flex items-center justify-center px-4 md:px-8">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between h-full">
              <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  className="w-full h-[70vh] sm:h-[50vh] md:h-full object-contain"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold mb-4">
                  Welcome to <span className="font-imperial text-4xl sm:text-5xl md:text-6xl">PEARLORA~</span>
                </h1>
                <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-600">Let fashion reign</p>
                <button className="px-5 sm:px-6 py-2 text-sm sm:text-base bg-black text-white hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
  </Slider>
</section>
  );
}
export default Hero;