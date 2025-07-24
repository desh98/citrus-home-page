'use client';

import Image from 'next/image';
import { FaFacebookF, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../public/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 animate-fadeIn">

        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 animate-bounceIn">
            <Image src={Logo} alt="Citrus Logo" width={100} height={100} />
          </div>
          <p className="text-yellow-200 text-sm">
            Integrated, Cloud-based, <br/>All-in-one hotel management system with Backoffice ERP,<br/> POS & Channel Manager.
          </p>
          <form className="flex items-center border border-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent text-white placeholder-white outline-none flex-grow"
            />
            <button type="submit" className="bg-purple-700 p-2 hover:brightness-110 transition-colors">
              <FaPaperPlane />
            </button>
          </form>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-orange-200 text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Home</li>
            <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">About us</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-orange-200 text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Citrus PMS</li>
            <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Citrus POS</li>
            <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Citrus FINANCE</li>
            <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">RoomsNET</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-orange-200 text-lg font-semibold mb-4">Contact us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-200 mt-1" />
              Sri Lanka: +94 77 228 4000
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-200 mt-1" />
              Maldives: +960 933 3101
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-200 mt-1" />
              Pakistan: +92 317 1981460
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <p>© Copyrights 2024. All rights reserved.</p>
        <div className="flex items-center space-x-3 mt-2 md:mt-0">
          <a href="#" className="p-2 rounded-full transition-transform transform hover:scale-110 bg-purple-700">
            <FaFacebookF />
          </a>
          <span>
            Design & developed by{" "}
            <a href="#" className="text-white hover:text-orange-400 transition-colors">Citrus PMS</a>
          </span>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.5s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}