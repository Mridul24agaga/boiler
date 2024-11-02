'use client'

import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function PricingPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endDate = new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000); // 20 days from now
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="bg-black text-white py-12 px-4">
      <Head>
        <title>Black Friday Sale - AI Startup Kit</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              Black Friday Sale
            </span>
          </h1>
          <p className="text-2xl mb-4">Limited Time Offer on our AI Startup Kit!</p>
          <div className="text-xl font-bold">
            Sale ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          Save hours of repetitive code,<br />ship fast, get profitable!
        </h2>
        <p className="text-xl text-center mb-8 text-white">
          <span className="text-yellow-400 font-bold">$100 off</span> for the first 4660 customers (13 left)
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg p-8 w-full lg:w-[400px] flex flex-col">
            <div className="mb-4">
              <span className="text-4xl font-bold text-black">$49</span>
              <span className="text-lg line-through text-gray-500 ml-2">$299</span>
              <span className="text-sm ml-1 text-black">USD</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-black">Starter</h3>
            <ul className="mb-6 space-y-2 flex-grow text-black">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> NextJS boilerplate</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Supabase authentication</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic NoSQL database integration</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Simple CRUD operations</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic on-page SEO optimization</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 3 AI templates:</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Text-based AI</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Image-based AI</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Video-based AI</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Pre-built UI components</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Responsive landing page template</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic dashboard layout</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Single-tenant architecture</li>
            </ul>
            <button
              className="bg-black text-white font-bold py-3 px-6 rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
              onClick={() => handleRedirect('https://www.paypal.com/ncp/payment/MLVAX8MGDWJN4')} 
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Ship Boiler Plate
            </button>
            <p className="text-sm text-gray-600 mt-2 text-center">Pay once. Build unlimited projects!</p>
          </div>

          {/* Advanced Plan */}
          <div className="bg-white rounded-lg p-8 w-full lg:w-[400px] flex flex-col relative">
            <span className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              BEST VALUE
            </span>
            <div className="mb-4">
              <span className="text-4xl font-bold text-black">$69</span>
              <span className="text-lg line-through text-gray-500 ml-2">$499</span>
              <span className="text-sm ml-1 text-black">USD</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-black">Advanced</h3>
            <ul className="mb-6 space-y-2 flex-grow text-black">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All Starter features</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced database optimization</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Real-time database capabilities</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced SEO tools & A/B testing</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 6 AI templates:</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Advanced text, image, video AI</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Voice recognition AI</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Predictive analytics AI</li>
              <li className="flex items-center ml-6"><span className="text-blue-500 mr-2">-</span> Chatbot with NLP</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced UI component library</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-tenancy architecture</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced security features</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Future updates and templates <span className="ml-2 text-xs bg-green-500 text-black px-2 py-1 rounded">Lifetime access</span></li>
            </ul>
            <button
              className="bg-black text-white font-bold py-3 px-6 rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
              onClick={() => handleRedirect('https://www.paypal.com/ncp/payment/MV5KZYRADT9X8')} 
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Ship Boiler Plate
            </button>
            <p className="text-sm text-gray-600 mt-2 text-center">Pay once. Build unlimited projects!</p>
          </div>
        </div>
      </div>
    </div>
  );
}