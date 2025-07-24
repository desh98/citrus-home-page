'use client';

import Image from 'next/image';
import Button from './Button';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[var(--background)] text-[var(--dark)] px-4 sm:px-8 py-20 pt-32 md:pt-40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Cloud Based, <span className="text-orange-500">All-in-One</span><br />Hotel Management System
        </h1>
        <p className="text-base sm:text-lg text-[var(--foreground)]/80 mb-8">
          Meeting all of your Hotel business needs.
        </p>
        <Button label="REQUEST A DEMO" />
      </div>

      {/* Hero UI image */}
      <div className="mt-12 sm:mt-20 relative z-10 flex justify-center">
        <div className="p-4 border-2 border-purple-400 hover:bg-gradient-to-b from-purple-400 to-purple-600 rounded-md">
          <Image
            src="/images/hero/banner_new_1.jpg"
            alt="Hotel dashboard UI"
            width={900}
            height={500}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 900px"
            className="rounded-xl shadow-xl hover:scale-102 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Cloud Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="cloud absolute w-24 h-12 bg-white opacity-20 rounded-full filter blur-md"
          style={{ top: '20%', left: '10%', animation: 'float 25s linear infinite' }}
        />
        <div
          className="cloud absolute w-32 h-16 bg-white opacity-15 rounded-full filter blur-lg"
          style={{ top: '40%', right: '15%', animation: 'float 30s linear infinite reverse' }}
        />
        <div
          className="cloud absolute w-20 h-10 bg-white opacity-25 rounded-full filter blur-md"
          style={{ bottom: '25%', left: '25%', animation: 'float 20s linear infinite' }}
        />
        <div
          className="cloud absolute w-28 h-14 bg-white opacity-20 rounded-full filter blur-lg"
          style={{ top: '60%', left: '60%', animation: 'float 28s linear infinite reverse' }}
        />
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 sm:w-56 h-40 sm:h-56 bg-yellow-400 rounded-full opacity-30 blur-2xl translate-x-1/2 translate-y-1/2" />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        .cloud {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .cloud:hover {
          opacity: 0.35;
          transform: scale(1.1);
        }
        @media (max-width: 640px) {
          .cloud {
            transform: scale(0.7);
          }
        }
      `}</style>
    </section>
  );
}