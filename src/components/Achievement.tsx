'use client';

import React, { useEffect } from 'react';

const AchievementsSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const counters = document.querySelectorAll('.counter') as NodeListOf<HTMLElement>;
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target')!, 10);
        if (counter.classList.contains('counting')) return;

        const updateCount = () => {
          let count = parseInt(counter.innerText.replace('+', ''), 10) || 0;
          const increment = Math.ceil(target / 200);
          if (count < target) {
            count += increment > (target - count) ? (target - count) : increment;
            counter.innerText = count + '+';
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target + '+';
          }
        };

        const rect = counter.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight - 100) {
          counter.classList.add('counting');
          updateCount();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { title: 'Countries', value: 4 },
    { title: 'Hotels & Resorts', value: 30 },
    { title: 'Satisfied Users', value: 500 },
    { title: 'Daily Bookings', value: 900 },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4"></div>
            <div className="text-4xl font-bold text-purple-600 counter" data-target={achievement.value}>
              0+
            </div>
            <p className="text-gray-600 mt-2">{achievement.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;