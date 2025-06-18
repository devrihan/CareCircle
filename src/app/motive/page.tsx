'use client';
import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="bg-blackGlass min-h-screen relative">
            {/* Gradient background blobs */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                <h1 className="text-4xl font-bold tracking-tight text-white-100 sm:text-6xl text-center">
                    Our Motive
                </h1>
                <p className="mt-6 text-lg leading-8 text-indigo-100 text-center">
                    In a world driven by transactions, we believe in contribution over currency.

                    CareCircle was born from the idea that everyone has something to offer — a skill, time, a listening ear — and that help shouldn’t always come with a price tag. Here, people support each other through genuine care, shared knowledge, and compassionate action.

                    Whether it's offering tutoring in exchange for therapy advice, helping someone cook while they help you code, or just having meaningful conversations — we’re building a space where empathy is the only currency.
                </p>

                <div className="mt-10 text-center">
                    <div className="mt-10 text-center">
                        <Link href="/" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
