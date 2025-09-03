// app/promotion/page.tsx
"use client"; // This page needs to be a client component to handle button clicks

import { useState } from 'react';
import Image from 'next/image';

// Define the types for our selections for better code safety
type Language = 'English' | 'हिन्दी' | 'अन्य';
type Format = 'Graphics' | 'Videos' | 'Printable';

export default function PromotionPage() {
  // State to track the user's selections
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('हिन्दी');
  const [selectedFormat, setSelectedFormat] = useState<Format>('Graphics');

  return (
    <div className="pb-24 max-w-lg mx-auto">
      {/* Main Hero Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/pm-img.png"
          alt="Promotional campaign awareness"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Page Title and Description */}
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold text-gray-900">
          प्रचार सामग्री डाउनलोड करें
        </h1>
        <p className="mt-2 text-gray-600 px-4">
          छात्रवृत्ति के लिए प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) के महत्व के बारे में जागरूकता फैलाने में मदद करने के लिए तैयार सामग्री तैयार की गई है।
        </p>
      </div>

      {/* Language Selection */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-center text-gray-800">अपनी भाषा चुनें</h2>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedLanguage('English')}
            className={`py-3 rounded-lg font-semibold transition-colors ${
              selectedLanguage === 'English'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setSelectedLanguage('हिन्दी')}
            className={`py-3 rounded-lg font-semibold transition-colors ${
              selectedLanguage === 'हिन्दी'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            हिन्दी
          </button>
          <button
            onClick={() => setSelectedLanguage('अन्य')}
            className={`py-3 rounded-lg font-semibold transition-colors ${
              selectedLanguage === 'अन्य'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            अन्य
          </button>
        </div>
      </div>

      {/* Content Format Selection */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-center text-gray-800">सामग्री प्रारूप का चयन करें</h2>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedFormat('Graphics')}
            className={`py-3 rounded-lg font-semibold transition-colors ${
              selectedFormat === 'Graphics'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            ग्राफिक्स
          </button>
          <button
            onClick={() => setSelectedFormat('Videos')}
            className={`py-3 rounded-lg font-semibold transition-colors ${
              selectedFormat === 'Videos'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            वीडियो
          </button>
          <button
            onClick={() => setSelectedFormat('Printable')}
            className={`py-3 rounded-lg font-semibold transition-colors ${
              selectedFormat === 'Printable'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            छापने योग्य
          </button>
        </div>
      </div>
      
      {/* Download Button */}
      <div className="mt-8">
          <button className="w-full py-4 bg-amber-400 text-black text-lg font-bold rounded-lg shadow-md hover:bg-amber-500 transition-colors">
            डाउनलोड करें
          </button>
      </div>
    </div>
  );
}