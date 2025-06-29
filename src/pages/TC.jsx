const TC= ()=>{
    return(
        <section className=" min-h-screen w-full bg-white py-12 px-4 md:px-8">
            <h2 className="text-2xl text-left font-bold text-black mt-20 mb-20">Terms <span className="text-gray-500">& </span>Conditions-  <span className="text-center font-bold text-3xl tracking-widest" style={{ fontFamily: "Urbanist" }}>
            PEALROA~ </span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4"><span className="font-bold text-xl">Welcome to PERLORA.</span> Perlora is an online fashion store offering Indian ethnic and Indo-fusion apparel and accessories.</p>

            <p className="text-gray-600 text-lg font-bold mb-4 mt-10">Product Information & Pricing
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2">
                <li>We strive to display our products as accurately as possible. However, due to lighting and screen differences, actual colors may vary slightly.</li>
                <li>All sizes are approximate and provided as guidance only.</li>
                <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
                <li>Perlora reserves the right to change prices at any time without prior notice.</li>
            </ul>

            
            <p className="text-gray-600 text-lg font-bold mb-4 mt-10">Orders & Delivery
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2">
                <li>Orders are confirmed only upon successful payment.</li>
                <li>Orders are processed within 2–5 business days.</li>
                <li>Delivery times may vary depending on your location. Estimated delivery: 5–10 business days.</li>
            </ul>

             <p className="text-gray-600 text-lg font-bold mb-4 mt-10">Returns & Exchanges
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2">
                <li>We offer returns/exchanges within 7 days of delivery on eligible items.</li>
                <li>Products must be unused, with original tags and packaging intact.</li>
            </ul>
            
        </section>
    );
};
export default TC;