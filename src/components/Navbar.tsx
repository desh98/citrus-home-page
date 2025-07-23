'use client';
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-purple-800 flex justify-center items-center flex-col md:flex-row fixed top-0 w-full z-10 transition-all duration-300" id="navbar">
      <div className="flex items-center justify-between w-full md:w-[80%] p-4 ">      
        <div className="flex items-center mb-4 md:mb-0 p-2">
        
        {/* Logo */}
      
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Image src="/images/logo.png" alt="Citrus Logo" width={200} height={200} />
        </div>
      
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto p-2">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <div className="relative group">
            <a href="#" className="hover:text-yellow-300">Our Products</a>
            <div className="absolute hidden group-hover:block bg-white text-black p-2 rounded shadow-md">
              <a href="#" className="block">Subitem 1</a>
              <a href="#" className="block">Subitem 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-yellow-300">Channel Manager</a>
          <a href="#" className="hover:text-yellow-300">About us</a>
          <a href="#" className="hover:text-yellow-300">Testimonial</a>
          <a href="#" className="hover:text-yellow-300">Contact</a>
        </div>
        <button className="bg-orange-500 text-white text-sm h-8 w-full md:w-auto px-4 py-1 rounded-full font-semibold mt-2 md:mt-0">
          TRY IT FREE
        </button>
      </div>
      </div>
    </nav>
  );
}

// Add this script at the end of your file or in a separate script file
document.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 0) {
    navbar.style.opacity = '0.7';
    navbar.style.height = '60px'; // Reduced height when scrolling
    navbar.style.padding = '4px';
  } else {
    navbar.style.opacity = '1';
    navbar.style.height = 'auto'; // Default height
    navbar.style.padding = '16px'; // Default padding
  }
});