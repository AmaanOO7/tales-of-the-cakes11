import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-700">
            Tales of the Cake
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-700">Home</Link>
            <Link to="/menu" className="hover:text-pink-700">Menu</Link>
            <Link to="/about" className="hover:text-pink-700">About</Link>
            <Link to="/contact" className="hover:text-pink-700">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pink-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-pink-100 px-4 py-2 space-y-2">
          <Link to="/" className="block hover:text-pink-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" className="block hover:text-pink-700" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/about" className="block hover:text-pink-700" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-pink-700" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
