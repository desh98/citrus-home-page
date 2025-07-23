'use client';

import React, { useEffect } from 'react';

const products = [
  {
    title: 'Citrus pms',
    description: 'Rates, Reservations, FrontOffice, Check-in, Check-out, Guest Billing, Housekeeping, Night-audit, etc.',
    link: '/citrus-pms',
  },
  {
    title: 'Citrus FINANCE',
    description: 'Purchasing, Stocks, Suppliers, Customers, Finance, Accounting, Banking, Recipe, Food Costing, Fixed Assets, etc.',
    link: '/citrus-finance',
  },
  {
    title: 'Citrus POS',
    description: 'Dine-in, Delivery, Take-away, Room Service, Ordering, Billing, Cashiering, KOT, BOT, Stocks, etc.',
    link: '/citrus-pos',
  },
  {
    title: 'ROOMSNET',
    description: 'RoomsNET is the most effective way to manage your Online Travel Agents.',
    link: '/roomsnet',
  },
];

const ProductSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100 && !card.classList.contains('animate-fade-in')) {
          card.classList.add('animate-fade-in');
          setTimeout(() => card.classList.add(`animate-slide-up-${index + 1}`), 100);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger animation on load if already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex justify-around p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen items-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="product-card bg-white p-6 rounded-xl w-1/5 text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
          <a
            href={product.link}
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
          >
            DISCOVER MORE
          </a>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;