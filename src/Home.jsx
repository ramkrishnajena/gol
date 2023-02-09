import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FlightSearch from "./components/FlightSearch";
import Package from "./components/Package";
import "./package.css";
import Footer from "./components/Footer";
import Island from "./components/Island";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <FlightSearch />
      <Package />
      <Island />
      <Footer />
    </div>
  );
}

export default Home;
