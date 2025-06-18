'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-blackGlass min-h-screen relative">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <button onClick={() => router.push('/')} className="-m-1.5 p-1.5">
              <span className="sr-only">CareCircle</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                width={32}
                height={32}
              />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/about" className="text-sm font-semibold text-indigo-100">
              About
            </Link>
            <Link href="/motive" className="text-sm font-semibold text-indigo-100">
              Motive
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-indigo-100">
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => router.push('/login')}
              className="text-sm font-semibold text-indigo-100"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-[30deg]
              bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-indigo-600 ring-1 ring-white-100">
              Something Meaningful is in the Making{' '}
              {/* <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white-900 sm:text-7xl">
              Empowering Communities, One Skill at a Time
            </h1>
            <p className="mt-8 text-lg font-medium text-indigo-100 sm:text-xl">
              Exchange help, not money. Join a circle of trust where skills, support, and compassion flow freely.


            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => router.push('/signup')}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Get started
              </button>
              <button
                onClick={() => router.push('/login')}
                className="text-sm font-bold text-indigo-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
