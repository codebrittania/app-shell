import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <About />
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
