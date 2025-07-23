'use client';

import Image from 'next/image';
import logo1 from '../../public/images/properties/22.jpg';
import logo2 from '../../public/images/properties/ApaVilla.jpg';
import logo3 from '../../public/images/properties/Corundum.png';
import logo4 from '../../public/images/properties/Mahanuge2.jpg';
import logo5 from '../../public/images/properties/PalmStone.jpg';
import logo6 from '../../public/images/properties/Seerock.jpg';
import logo7 from '../../public/images/properties/Tantalize.jpg';
import logo8 from '../../public/images/properties/okwin.png';

import React, { useEffect } from 'react';



const Properties = () => {

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="flex flex-col mt-10 w-full justify-center items-center py-20">
        <div>
            <h1 className="text-4xl font-bold text-purple-950 mb-4">Trusted by 30+ properties across the Island</h1>
        </div>
      <div className="w-[80%] h-60 overflow-hidden relative">
        <div
          className="flex animate-slide gap-2"
          style={{
            width: `${logos.length * 15}%`,
            animation: 'slide 50s linear infinite alternate', 
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center cursor-pointer"
              style={{ width: '15%' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Image
                src={logo}
                alt={`Logo ${index % logos.length + 1}`}
                width={200}
                height={120}
                className="object-contain transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            50% { transform: translateX(-50%); } /* Move to the left halfway */
            100% { transform: translateX(0); } /* Return to the starting position */
          }
          .animate-slide {
            display: flex;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Properties;