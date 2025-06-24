'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Footer from '@/app/components/Footer';
import GiveHelpCard from '@/app/components/GiveHelpCard';
import RequestHelpCard from '@/app/components/RequestHelpCard';


export default function WelcomePage() {
  const [giveHelpData, setGiveHelpData] = useState([]);
  const [requestHelpData, setRequestHelpData] = useState([]);

  useEffect(() => {
  fetch('/api/give')
    .then(res => res.json())
    .then(data => setGiveHelpData(data.givers || []));

  fetch('/api/ask')
    .then(res => res.json())
    .then(data => setRequestHelpData(data.askers || []));
}, []);
  return (
    <div className="bg-blackGlass min-h-screen relative text-white">
      {/* Blurry Gradient Background */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] 
            bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 
            sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Welcome Text */}
      <div className="text-center pt-32 px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to HelpHub</h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          This is your space to exchange help without money. Request support or offer your skills —
          together, we build a kinder world.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <Link
            href="/request"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Request Help
          </Link>
          <Link
            href="/give"
            className="rounded-lg border border-indigo-500 px-6 py-3 text-sm font-semibold text-indigo-300 hover:bg-indigo-700 transition"
          >
            Give Help
          </Link>
        </div>
      </div>

      {/* Request Help Section */}
      <div className="mt-20 px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-6">People Asking for Help</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {requestHelpData.map((person: any, i) => (
            <RequestHelpCard
              key={i}
              name={person.name}
              request={person.help}
              contact={person.contact}
            />
          ))}
        </div>
      </div>

      {/* Give Help Section */}
      <div className="mt-20 px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-6">People Willing to Help</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {giveHelpData.map((person: any, i) => (
            <GiveHelpCard
              key={i}
              name={person.name}
              help={person.help}
              contact={person.contact}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
