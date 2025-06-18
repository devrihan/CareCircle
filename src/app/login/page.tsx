// src/app/login/page.tsx
'use client';
import { auth } from '@/app/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/welcome');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-violetGlass backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h1 className="text-xl mb-4 font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 rounded bg-blackGlass w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 rounded bg-blackGlass w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-purple-600 px-4 py-2 rounded w-full" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>
    </div>
  );
}
