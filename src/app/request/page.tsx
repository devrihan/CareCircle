'use client';

import { useState } from 'react';

export default function AskHelp() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    whatINeed: '',
    contact: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // TODO: Send this to your backend / database
    alert('Your request has been submitted!');
  };

  return (
    <div className="min-h-screen bg-blackGlass px-4 py-24">
      <div className="max-w-2xl mx-auto rounded-xl bg-white/5 backdrop-blur-md p-8 shadow-lg border border-white/10">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Ask for Help</h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-white">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium">Your Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="whatINeed" className="block text-sm font-medium">What help do you need?</label>
            <textarea
              id="whatINeed"
              name="whatINeed"
              rows={4}
              value={formData.whatINeed}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium">Phone / Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
