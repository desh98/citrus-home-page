'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Is Citrus Only a PMS?',
    answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting.',
  },
  {
    question: 'What is process to get refund?',
    answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Remaining essentially unchanged, it was popularized in the 1960s.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-indigo-100 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-700 mb-6 flex items-center">
          <span className="mr-3 text-3xl md:text-4xl">❓</span> FAQ - Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Indus orem ipsum has been the standard dummy.
        </p>
        <div className="space-y-5">
          {faqs.map((faq, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                border: '1px solid rgba(107, 70, 193, 0.1)',
                backdropFilter: 'blur(5px)',
              }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left p-5 md:p-6 flex justify-between items-center text-purple-800 font-semibold text-lg md:text-xl focus:outline-none"
                style={{
                  background: openIndex === index ? 'linear-gradient(135deg, #f0e7ff, #e0d3ff)' : 'transparent',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) e.currentTarget.style.background = 'linear-gradient(135deg, #f5f1ff, #e6dfff)';
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full flex items-center justify-center mr-3 text-purple-800 shadow-inner">
                    ❓
                  </span>
                  {faq.question}
                </span>
                <span className="text-indigo-500 text-xl transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 md:p-6 text-gray-700 text-sm md:text-base bg-gradient-to-br from-gray-50 to-indigo-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;