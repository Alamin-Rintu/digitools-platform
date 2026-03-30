import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsLetterSection from "./components/NewsLetterSection/NewsLetterSection";
import PricingSection from "./components/PricingSection/PricingSection";
import Stats from "./components/Stats/Stats";
import StepSection from "./components/StepSection/StepSection";
import AllTools from "./components/AllTools/AllTools";
import ProductCart from "./components/ProductCart/ProductCart";
import { ToastContainer } from "react-toastify";

const toolsPromise = fetch("/tools.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [addToCart, setAddToCart] = useState([]);
  return (
    <>
      <Navbar addToCart={addToCart} />
      <Banner />
      <Stats />

      <div className="text-center mt-16">
        <h3 className="text-4xl font-bold text-[#101727]">
          Premium Digital Tools
        </h3>
        <p className="text-[16px] text-[#627382] mt-2">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-transparent justify-center mt-3 ">
        <input
          onClick={() => setToggle(true)}
          type="radio"
          name="my_tabs_1"
          className={`tab border-none rounded-full ${toggle ? "text-white bg-linear-65 from-[#4F39F6] to-[#9514FA] hover:opacity-90" : ""}`}
          aria-label="Products"
          defaultChecked
        />
        <input
          onClick={() => setToggle(false)}
          type="radio"
          name="my_tabs_1"
          className={`tab border-none rounded-full ${toggle === false ? "text-white bg-linear-65 from-[#4F39F6] to-[#9514FA] hover:opacity-90" : ""}`}
          aria-label={`Cart (${addToCart.length})`}
        />
      </div>

      {toggle ? (
        <Suspense>
          <AllTools
            toolsPromise={toolsPromise}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          />
        </Suspense>
      ) : (
        <ProductCart addToCart={addToCart} setAddToCart={setAddToCart} />
      )}

      <StepSection />
      <PricingSection />
      <NewsLetterSection />
      <Footer />
      <ToastContainer position="top-center" autoClose={200} />
    </>
  );
}

export default App;
