'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const sections = [
  {
    title: 'Cloud Based',
    description: 'Citrus is a Cloud Based Fully integrated Property Management System and Back Office ERP that increases your hospitality business efficiency & accuracy.',
    // icon: '🌐',
    details: ['Cost Savings', 'Data Security', 'Increase Flexibility', 'Disaster Recovery', 'Automatic Updates'],
    image: 'images/cloud/cloudbased.png',
  },
  {
    title: 'All-in-One',
    description: 'Citrus PMS cloud-based hotel management system comes with next-gen capabilities to help you automate and streamline daily operations, improve overall efficiency, and maximize revenue.',
    // icon: '💻',
    details: ['Reservations | Frontdesk | Housekeeping | Cashiering | Night Audit', 'Order Taking | KOT | BOT | Billing | Cashiering | Time management'],
    image: 'images/all-in-one/AllInOne2-01.png',
  },
  {
    title: '24x7 Support',
    description: 'Got queries? Reach our live customer success executives and get them sorted easily.',
    // icon: '👤',
    details: ['Online Help documents', 'WhatsApp Chat Support', 'Dedicated support team'],
    image: '/images/support/support.png',
  },
  {
    title: 'Unmatched User Experience',
    description: 'Citrus PMS UI/UX designs empower your staff across the application, ensuring a consistent visual experience on computers, tablets, or phones.',
    // icon: '👍',
    details: ['Responsive Design', 'Consistent Interface', 'Multi-device Support'],
    image: '/images/experience/Collaborate-01.png',
    stats: 'Visitors avg 820 per day',
  },
  {
    title: 'Mobile Friendly',
    description: 'Run your hotel operations on the mobile.',
    // icon: '📱',
    details: ['Management Dashboard App', 'Mobile App for restaurant order taking', 'Channel Manager Mobile App'],
    image: '/images/mobile/mobile-01.png',
    stats: 'Profit $569 Total',
  },
];

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slides = gsap.utils.toArray('.service-slide');
    const totalWidth = slides.length * 100;

    gsap.set(containerRef.current, { width: `${totalWidth}%` });
    gsap.set(slides, { width: `${100 / slides.length}%` });

    const animateToSlide = () => {
      gsap.to(containerRef.current, {
        x: `-${activeIndex * (100 / slides.length)}%`,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    animateToSlide();
  }, [activeIndex]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div
        ref={containerRef}
        className="flex h-full transition-transform duration-500"
        style={{ display: 'flex' }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="service-slide flex h-full w-full shrink-0 items-center justify-center bg-transparent"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
              <div className="w-full md:w-1/2">
                {/* <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                  {section.icon}
                </div> */}
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  {section.title}
                </h2>
                <p className="mb-6 text-lg text-gray-600">{section.description}</p>
                <ul className="space-y-3 text-left text-purple-700">
                  {section.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                {section.stats && (
                  <div className="mt-6 inline-block rounded-lg bg-gray-100 p-4 shadow-md">
                    <p className="text-gray-700">{section.stats}</p>
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={section.image}
                  alt={`${section.title} illustration`}
                  className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'scale-125 bg-purple-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;