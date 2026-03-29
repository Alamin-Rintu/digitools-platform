import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsLetterSection from "./components/NewsLetterSection/NewsLetterSection";
import PricingSection from "./components/PricingSection/PricingSection";
import Stats from "./components/Stats/Stats";
import StepSection from "./components/StepSection/StepSection";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <StepSection />
      <PricingSection />
      <NewsLetterSection />
      <Footer/>
    </>
  );
}

export default App;
