const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-row justify-between items-center text-sm">
        
        <div className="flex flex-col space-y-2">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/TermsandConditions" className="hover:underline">Terms & Conditions</a>
        </div>

        <div className="text-center font-bold text-lg tracking-widest mt-20" style={{ fontFamily: "Urbanist" }}>
          PEALROA~
        </div>

      <div className="flex flex-col items-end space-y-2 text-right">
  <span className="font-medium">Follow Us</span>
  <div className="flex flex-col space-y-1">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      Facebook
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      Instagram
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      Twitter
    </a>
    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
      Pinterest
    </a>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
