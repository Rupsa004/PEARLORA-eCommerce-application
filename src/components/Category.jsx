const Category = ({ onClose }) => {
  return (
    <div className="fixed top-8 left-0 h-full w-64 bg-white shadow-lg z-50 rounded-xl transition-transform transform translate-x-0">
      <div className="p-4  flex justify-between items-center">
        <h3 className="text-lg font-bold uppercase">shop by category</h3>
        <button onClick={onClose} className="text-black-500 font-bold text-xl">&times;</button>
      </div>
      <div className="p-4 overflow-y-auto">
        <h4 className="font-semibold mb-2">Ethnic & Fusion Wear</h4>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> All Products</li>
          <li><input type="checkbox" /> Kurta Suit Sets</li>
          <li><input type="checkbox" /> Dresses & Gown</li>
          <li><input type="checkbox" /> Salwars</li>
          <li><input type="checkbox" /> Sarees</li>
          <li><input type="checkbox" /> Lahenga-Choli</li>
          <li><input type="checkbox" /> Tunics & Bottom wear</li>
          <li><input type="checkbox" /> Co-Ord Set</li>
          <li><input type="checkbox" /> Jackets & Shrugs</li>
          <li><input type="checkbox" /> Shirts</li>
          <li><input type="checkbox" /> Tops</li>
          <li><input type="checkbox" /> Boho set</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
