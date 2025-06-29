const ReusableBN = ({ img, subtitle, title, description, buttonText }) => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        <div>
          <img
            src={img}
            alt="Banner"
            className="w-[460px] h-[300px] object-cover rounded-xl shadow-lg mt-20"
          />
        </div>

        <div className="text-left px-2 md:px-6">
          <h2 className="text-sm text-gray-600 capitalize mb-2">{subtitle}</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">{title}</h2>
          <p className="text-gray-600 text-base mb-6">{description}</p>
          <button className="text-gray-600 border-2 border-gray-200 px-6 py-2 rounded-full font-semibold hover:bg-gray-600 hover:text-white transition duration-300">
            {buttonText} &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReusableBN;
