import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const StepSection = () => {
  return (
    <div className="mt-16 bg-[#F9FAFC] p-8 mb-16">
      <div className="text-center">
        <h3 className="font-bold text-5xl text-[#101727] mb-2">
          Get Started in 3 Steps
        </h3>
        <p className="text-[16px] text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 w-11/12 mx-auto">
        {/* 1st */}
        <div className="bg-white p-6 text-center rounded-2xl hover:shadow-xl transition duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-center ">
            <img
              className="w-14 h-14 p-3 bg-[#9614fa27] rounded-full"
              src={userImg}
              alt=""
            />
          </div>
          <h4 className="font-bold text-2xl text-[#001931] mt-1">
            Create Account
          </h4>
          <p className="text-[#627382] text-[16px] mt-1">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* 2nd */}
        <div className="bg-white p-6 text-center rounded-2xl hover:shadow-xl transition duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-center ">
            <img
              className="w-14 h-14 p-3 bg-[#9614fa27] rounded-full"
              src={packageImg}
              alt=""
            />
          </div>
          <h4 className="font-bold text-2xl text-[#001931] mt-1">
            Choose Products
          </h4>
          <p className="text-[#627382] text-[16px] mt-1">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* 3rd */}
        <div className="bg-white p-6 text-center rounded-2xl hover:shadow-xl transition duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-center ">
            <img
              className="w-14 h-14 p-3 bg-[#9614fa27] rounded-full object-contain"
              src={rocketImg}
              alt=""
            />
          </div>
          <h4 className="font-bold text-2xl text-[#001931] mt-1">
            Start Creating
          </h4>
          <p className="text-[#627382] text-[16px] mt-1">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
