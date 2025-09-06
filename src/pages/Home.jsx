
import { Link } from "react-router-dom";
import FeaturedSlider from "../components/FeaturedSlider";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      {/* Parallax Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604152135912-04a6c6f1df7a?auto=format&fit=crop&w=1200&q=80')",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-6 animate-fadeIn">
          Tales of the Cake 🎂
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 animate-fadeIn delay-200">
          Delicious cakes for your sweetest moments
        </p>
        <Link to="/menu">
          <button className="bg-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-pink-600 transform hover:scale-105 transition duration-300 animate-fadeIn delay-400">
            Explore Our Menu
          </button>
        </Link>
      </div>

      {/* Featured Slider */}
      <FeaturedSlider />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default Home;
