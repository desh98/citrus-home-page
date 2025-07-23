'use client';

import React, { useEffect } from 'react';

const products = [
  {
    title: 'Citrus pms',
    description: 'Rates, Reservations, FrontOffice, Check-in, Check-out, Guest Billing, Housekeeping, Night-audit, etc.',
    link: '/citrus-pms',
    image: '/images/products/pms_logo_black.png',
  },
  {
    title: 'Citrus FINANCE',
    description: 'Purchasing, Stocks, Suppliers, Customers, Finance, Accounting, Banking, Recipe, Food Costing, Fixed Assets, etc.',
    link: '/citrus-finance',
    image: '/images/products/finance_logo_black.png',
  },
  {
    title: 'Citrus POS',
    description: 'Dine-in, Delivery, Take-away, Room Service, Ordering, Billing, Cashiering, KOT, BOT, Stocks, etc.',
    link: '/citrus-pos',
    image: '/images/products/pos_logo_black.png',
  },
  {
    title: 'ROOMSNET',
    description: 'RoomsNET is the most effective way to manage your Online Travel Agents.',
    link: '/roomsnet',
    image: '/images/products/logo_roomsnet.png',
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
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-20 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen items-start">
      {products.map((product, index) => (
        <div
          key={index}
          className="product-card w-full h-80 perspective-1000 animate-fade-in"
        >
          <div
            className="relative w-full h-full transform-style-preserve-3d transition-all duration-500 hover:flip-y hover:scale-105 hover:shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 128, 128, 0.4)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center text-center"
              style={{
                backfaceVisibility: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.5s ease',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 mb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 128, 128, 0.1) 0%, rgba(0, 191, 255, 0.05) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>
            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-teal-600 rounded-xl p-4 flex flex-col justify-center items-center text-center text-white"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.5s ease',
              }}
            >
              <h3 className="text-xl font-bold mb-2">Details</h3>
              <p className="text-sm leading-relaxed">Explore {product.title} for advanced management solutions.</p>
              <a
                href={product.link}
                className="mt-4 inline-block px-4 py-2 bg-white text-teal-600 rounded-full hover:bg-gray-200 transition-colors duration-300"
                style={{ fontWeight: '700' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;