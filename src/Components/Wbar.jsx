
import { Phone, UserRound, Search } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeBar = () => {
  return (
    <div className="w-full bg-[#10466B] text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 py-3">

        <div className="flex flex-wrap items-center justify-end gap-6">
          <Link
          to='/contact'
          >
          <div className="flex items-center gap-2 text-sm font-semibold">
          <Phone size={18} />
          <span>Contact Us</span>
           </div>
           </Link>
           
                     <Link
          to='/privacy-policy'
          >
          <div className="flex items-center gap-2 text-sm font-semibold">
            <UserRound size={19} />
            <span>Privacy Policy</span>
          </div>
           </Link>
          
          <div className="flex items-center bg-white rounded-full p-1 w-full sm:w-auto sm:min-w-[300px]">
            <Search size={19} className="text-gray-500 ml-3" />

            <input
              type="text"
              placeholder="Search AfriYouth..."
              className="flex-1 min-w-0 px-3 py-2 text-sm text-gray-700 outline-none rounded-full"
            />

            <button className="bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition">
              SEARCH
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WelcomeBar;
