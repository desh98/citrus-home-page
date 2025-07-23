'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[var(--primary)] flex justify-center items-center flex-col md:flex-row fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'opacity-70 h-15 p-1' : 'opacity-100 h-auto p-4'}`}
      id="navbar"
    >
      <div className="flex items-center justify-between w-full md:w-[80%]">
        <div className="flex items-center mb-4 md:mb-0 p-2">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <Image src="/images/logo.png" alt="Citrus Logo" width={150} height={150} />
            <h5 className="text-[var(--primary)]">ds</h5>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto p-2">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-white">
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
          <div onClick={toggleMenu}>
            <Button label="TRY IT FREE" href="#contact" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[var(--primary)] flex flex-col items-center justify-start pt-20 space-y-8 text-white text-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-10`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          aria-label="Close menu"
        >
          <RxCross2 />
        </button>
        <a href="#" className="hover:text-yellow-300" onClick={toggleMenu}>Home</a>
        <div className="relative">
          <button
            onClick={() => {
              toggleMenu();
              // Placeholder for submenu toggle logic
            }}
            className="hover:text-yellow-300 flex items-center"
          >
            Our Products <span className="ml-1">▼</span>
          </button>
          <div className="mt-2 space-y-2">
            <a href="#" className="block pl-4 hover:text-yellow-300" onClick={toggleMenu}>Subitem 1</a>
            <a href="#" className="block pl-4 hover:text-yellow-300" onClick={toggleMenu}>Subitem 2</a>
          </div>
        </div>
        <a href="#" className="hover:text-yellow-300" onClick={toggleMenu}>Channel Manager</a>
        <a href="#" className="hover:text-yellow-300" onClick={toggleMenu}>About us</a>
        <a href="#" className="hover:text-yellow-300" onClick={toggleMenu}>Testimonial</a>
        <a href="#" className="hover:text-yellow-300" onClick={toggleMenu}>Contact</a>
        <div onClick={toggleMenu}>
          <Button label="TRY IT FREE" href="#contact" />
        </div>
      </div>
    </nav>
  );
}