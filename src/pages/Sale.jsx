import ReusableBN from "../components/ReusableBN";
import BN11 from '../assets/BN11.jpg';
import BN12 from '../assets/BN12.jpg';
import BN13 from '../assets/BN13.jpg';


const Sale = () => {
  return (
    <div>
      <ReusableBN
        img={BN11}
        subtitle="Exclusive"
        title="Saanjh ki Saree"
        description="Discover the exquisite charm — a blend of tradition and sophistication!"
        buttonText="Own the Elegance"
      />
      <ReusableBN
        img={BN12}
        subtitle="Style meets comfort"
        title="Modern Ethnic"
        description="Celebrate tradition in modern cuts. Your style, your story."
        buttonText="Explore Now"
      />
      <ReusableBN
        img={BN13}
        subtitle="Offers just for you"
        title="SUMMER SALE 2025"
        description="Get up to 50% off on top picks this season. Shop before it's gone!"
        buttonText="Grab Deals"
      />
    </div>
  );
};

export default Sale;