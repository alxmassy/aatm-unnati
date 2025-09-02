// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import { Sun, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left Side: Logos and Title */}
          <div className="flex items-center gap-3">
            <Image src="/emblem.png" alt="Emblem of India" width={32} height={32} />
            <Image src="/dbt-logo.png" alt="DBT Logo" width={40} height={40} />
            <div>
              <h1 className="text-sm font-bold text-gray-800 leading-tight">
                Direct Benefit Transfer
              </h1>
              <p className="text-xs text-gray-500 leading-tight">
                Government of India
              </p>
            </div>
          </div>

          {/* Right Side: Controls (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <Sun className="text-gray-600" />
            <select className="border-none bg-transparent text-gray-800">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>

          {/* Hamburger Menu (Visible on mobile) */}
          <div className="md:hidden">
            <button className="text-gray-800">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};2