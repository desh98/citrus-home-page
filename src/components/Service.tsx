'use client';

import React, { useEffect } from 'react';

const sections = [
  {
    title: 'Cloud Based',
    description: 'Citrus is a Cloud Based Fully integrated Property Management System and Back Office ERP that increase your hospitality business, efficiency & accuracy.',
    icon: '🌐',
    details: ['Cost Savings', 'Data Security', 'Increase Flexibility', 'Disaster Recovery', 'Automatic Updates'],
    image: '/cloud-illustration.png',
  },
  {
    title: 'All-in-One',
    description: 'Citrus PMS cloud-based hotel management system comes with next-gen capabilities to help you automate and streamline daily operations, improve overall efficiency and maximize revenue. Citrus PMS has all the capabilities to manage any size of Hotel.',
    icon: '💻',
    details: ['Reservations | Frontdesk | Housekeeping | Cashiering | Night Audit Etc.', 'Order Taking | KOT | BOT | Billing | Cashiering | Time management Etc.'],
    image: '/all-in-one-illustration.png',
  },
  {
    title: '24x7 Support',
    description: 'Got queries? Reach our live customer success executives and get them sorted easily.',
    icon: '👤',
    details: ['Online Help documents', 'Whats-app Chat Support', 'Dedicated support team'],
    image: '/support-illustration.png', 
  },
  {
    title: 'Unmatch User Experience',
    description: 'Citrus PMS UI/UX designs are empowering your staff across the application ensuring that users have the same visual experience, whether viewing from a computer, a tablet, or their phone.',
    icon: '👍',
    details: ['Responsive Design', 'Consistent Interface', 'Multi-device Support'],
    image: '/user-experience-illustration.png', 
    stats: 'Visitors avg 820 per day',
  },
  {
    title: 'Mobile Friendly',
    description: 'Run your hotel operations on the mobile.',
    icon: '📱',
    details: ['Management Dashboard App', 'Mobile App for restaurant order Taking', 'Channel Manager Mobile App'],
    image: '/mobile-friendly-illustration.png', 
    stats: 'Profit $569 Total',
  },
];

const ServicesPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.service-section');
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100 && !card.classList.contains('animate-fade-in')) {
          card.classList.add('animate-fade-in');
        //   setTimeout(() => card.classList.add(`animate-slide-up-${index + 1}`), 100);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen ">
      {sections.map((section, index) => (
        <section
          key={index}
          className="service-section py-12 px-4 flex flex-col md:flex-row items-center justify-between bg-white mx-auto max-w-7xl"
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="text-4xl mb-4">{section.icon}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="text-left text-purple-700 space-y-2">
              {section.details.map((detail, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
            {section.stats && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg inline-block">
                <p className="text-gray-700">{section.stats}</p>
              </div>
            )}
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={section.image}
              alt={`${section.title} illustration`}
              className="max-w-full h-auto"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;