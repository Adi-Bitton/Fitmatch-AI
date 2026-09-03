import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Founder from "./components/Founder";
import Trainers from "./components/Trainers";
import FinalCta from "./components/FinalCta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main dir="rtl" className="overflow-x-clip">
        <Hero />
        <Benefits />
        <About />
        <Categories />
        <HowItWorks />
        <Founder />
        <Trainers />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
