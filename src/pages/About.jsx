import Aboutpic from '../assets/aboutpic.jpg';

const About = () => {
    return(
        <section className=" min-h-screen w-full bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-start pt-8">
                <div className="justify-center">
                    <img src={Aboutpic} alt="About" className="w-[360px] h-[480px]   object-cover rounded-2xl shadow-lg mt-10" />
                </div>
                <div className="mt-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us~</h2>
          <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Urbanist" }}>
            <span className="font-bold">PEARLORA~</span> is a modern clothing brand that blends the elegance of traditional Indian culture with the aesthetics of modern India. 
            Our mission is to reimagine ethnic roots through contemporary silhouettes, creating timeless pieces that are both rooted and relevant. From the heart of Kolkata, 
            we craft garments that celebrate heritage while embracing the style of today's generation.
          </p>
        </div>
        </div>
    </section>
    )
}
export default About;