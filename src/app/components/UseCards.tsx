'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Section = 'about' | 'experience' | 'contact';

const UserCard = () => {
  const [activeSection, setActiveSection] = useState<Section>('about');

  return (
    <div className="w-full max-w-md bg-violetGlass rounded-xl overflow-hidden shadow-lg backdrop-blur-md text-white">
      {/* Header */}
      <div className="relative">
        <div
          className="h-40 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=934&q=80')",
          }}
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <Image
            src="https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=934&q=80"
            alt="avatar"
            className="rounded-full border-4 border-white"
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Name and title */}
      <div className="text-center mt-10 px-6">
        <h1 className="text-xl font-bold">William Rocheald</h1>
        <h2 className="text-sm text-indigo-300">UI Developer</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mt-6 text-sm font-semibold">
        <button
          onClick={() => setActiveSection('about')}
          className={`px-3 py-1 rounded ${activeSection === 'about' ? 'bg-indigo-600' : 'bg-blackGlass'}`}
        >
          ABOUT
        </button>
        <button
          onClick={() => setActiveSection('experience')}
          className={`px-3 py-1 rounded ${activeSection === 'experience' ? 'bg-indigo-600' : 'bg-blackGlass'}`}
        >
          EXPERIENCE
        </button>
        <button
          onClick={() => setActiveSection('contact')}
          className={`px-3 py-1 rounded ${activeSection === 'contact' ? 'bg-indigo-600' : 'bg-blackGlass'}`}
        >
          CONTACT
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4 px-6 pb-6 text-sm">
        {activeSection === 'about' && (
          <div>
            <h3 className="font-semibold mb-2">ABOUT</h3>
            <p className="text-indigo-200">
              Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.
            </p>
          </div>
        )}

        {activeSection === 'experience' && (
          <div>
            <h3 className="font-semibold mb-2">EXPERIENCE</h3>
            <ul className="text-indigo-200 space-y-2">
              <li>
                <strong>2014:</strong> Front-end Developer at JotForm
              </li>
              <li>
                <strong>2016:</strong> UI Developer at GitHub
              </li>
              <li>
                <strong>2018:</strong> Illustrator at Google
              </li>
              <li>
                <strong>2020:</strong> Full-Stack Developer at CodePen
              </li>
            </ul>
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <h3 className="font-semibold mb-2">CONTACT</h3>
            <div className="text-indigo-200 space-y-2">
              <p>📍 Algonquin Rd, MI</p>
              <p>📞 (269) 756-9809</p>
              <p>📧 william@rocheald.com</p>
            </div>
            <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded">
              WORK TOGETHER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
