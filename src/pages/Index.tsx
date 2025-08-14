import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Location />
        <Pricing />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
