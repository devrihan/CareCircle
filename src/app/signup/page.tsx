'use client';
import { auth } from '@/app/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FirebaseError } from 'firebase/app'; // ✅ Import FirebaseError type

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await fetch('/api/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
        }),
      });

      router.push('/welcome');
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-violetGlass backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h1 className="text-xl mb-4 font-bold">Sign Up</h1>
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
        <button className="bg-purple-600 px-4 py-2 rounded w-full" onClick={handleSignup}>
          Sign Up
        </button>
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>
    </div>
  );
}
