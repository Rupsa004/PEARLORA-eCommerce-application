import Banner from '../assets/Banner.jpg';

const BannerCom = () => {
    return(
        <section className="w-full bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center relative">
                <div className="relative z-10">
                    <img src={Banner} alt="Banner" className="w-[560px] h-[400px]   object-cover rounded-xl shadow-lg" />
                </div>

                <div className="text-left px-2 md:px-6">
                    <h2 className="text-sm text-gray-600 capitalize mb-2">most wanted</h2>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">our culture, our tradition</h2>
                    <p className="text-gray-600 text-base mb-6">Each thread in our tradition reflects grace, heritage, and identity. From intricate weaves to timeless silhouettes, we celebrate the essence of tradition reimagined for the modern world. </p>
                    <button className="text-gray-600 border-2 border-gray-200 px-6 py-2 rounded-full font-semibold hover:bg-gray-600 hover:text-white transition duration-300">
                    UP TO 40% OFF &rarr;
                </button>
                </div>

            </div>
        </section>
    );
};
export default BannerCom;