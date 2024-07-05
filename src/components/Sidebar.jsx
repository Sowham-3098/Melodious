import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[20%] h-full p-4 flex flex-col gap-4 text-white hidden lg:flex bg-[#181818]">
      <div className="flex-col items-center gap-3 mb-4">
        <img className="w-30" src={assets.spotify_logo} alt="Logo" />
       
      </div>
      <div className="bg-[#121212] h-[20%] rounded flex flex-col justify-around p-4">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        
      </div>
      <div className="bg-[#121212] h-[50%] rounded p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold">Your Melody</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.plus_icon} alt="Add" />
            <img className="w-5" src={assets.arrow_icon} alt="More" />
          </div>
        </div>
       
       
      </div>
    </div>
  );
};

export default Sidebar;
