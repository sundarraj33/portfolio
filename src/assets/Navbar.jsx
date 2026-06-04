import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200 shadow-md bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold">
          Sundar's Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="font-semibold text-blue-600 cursor-pointer">Home</li>
          <li className="font-semibold hover:text-blue-600 cursor-pointer">About</li>
          <li className="font-semibold hover:text-blue-600 cursor-pointer">Experience</li>
          <li className="font-semibold hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="font-semibold hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li className="font-semibold text-blue-600">Home</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Experience</li>
            <li className="font-semibold">Projects</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;