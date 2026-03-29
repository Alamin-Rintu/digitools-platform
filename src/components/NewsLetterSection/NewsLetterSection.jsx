const NewsLetterSection = () => {
  return (
    <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] p-10 text-center mt-16 ">
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Ready to Transform Your Workflow?
      </h3>
      <p className="text-sm text-white mt-3 mb-3">
        Join thousands of professionals who are already using Digitools to work
        smarter. <br /> Start your free trial today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
        <button className="btn rounded-full text-[#9514FA] mr-4">
          Explore Products
        </button>
        <button className="btn rounded-full bg-transparent text-white">
          View Pricing
        </button>
      </div>
      <p className="text-white text-sm mt-3">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default NewsLetterSection;
