import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../../assets/banner.png";
import dotImg from '../../assets/dot.png'
const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center mt-16 gap-5 text-center sm:text-left">
      <div className="space-y-4">
        <div className="badge badge-outline badge-primary text-[#9514FA]">
            <img className="object-contain" src={dotImg} alt="" />
          New: AI-Powered Tools Available
        </div>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101727] leading-tight">
          Supercharge Your <br /> Digital Work flow
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div>
          <button className="btn bg-linear-65 from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white mr-4">
            Explore Products
          </button>
          <button className="btn border border-purple-500 rounded-full text-[#9514FA]">
          <CiPlay1></CiPlay1>  Watch Demo
          </button>
        </div>
      </div>

      <div>
        <img className="w-full max-w-md mx-auto" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
