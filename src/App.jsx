import "./App.css";
import Banner from "./components/Banner/Banner";
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
    </>
  );
}

export default App;
