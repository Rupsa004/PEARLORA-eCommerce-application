import { CircleUserRound, CircleArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const User = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative px-4 pt-16">
    
      <div className="bg-white shadow-2xl rounded-xl p-20 w-full h-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <CircleUserRound size={80} className="text-black" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Hello, Rai</h2>
        <h4 className="text-sm text-gray-500 mt-4 mb-6">Welcome to <span className="font-imperial text-2xl sm:text-lg ">PERLORA~</span></h4>

        <div className="space-y-3 text-left text-sm text-gray-800">
          <p><span className="font-medium">Username:</span> @rai</p>
          <p><span className="font-medium">Email:</span> rai@gmail.com</p>
          <p><span className="font-medium">Location:</span> Kolkata, WB</p>
         </div>
      </div>
      <button
        onClick={handleLogout}
        className="fixed bottom-10 left-12 text-gray-500 hover:text-black text-sm font-semibold flex items-center gap-2"
      >
        <CircleArrowLeft size={20} /> Log out
      </button>
    </div>
  );
};

export default User;
