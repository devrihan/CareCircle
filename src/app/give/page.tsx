'use client';

import { useState } from 'react';

export default function GiveHelp() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    help: '',
    contact: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/give', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert('Thank you for offering your help!');
        setFormData({ name: '', age: '', help: '', contact: '', email: '' }); // reset form
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Server error. Please try later.');
    }
  };

  return (
    <div className="min-h-screen bg-blackGlass px-4 py-24">
      <div className="max-w-2xl mx-auto rounded-xl bg-white/5 backdrop-blur-md p-8 shadow-lg border border-white/10">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Offer Your Help</h1>

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
            <label htmlFor="help" className="block text-sm font-medium">What help can you provide?</label>
            <textarea
              id="help"
              name="help"
              rows={4}
              value={formData.help}
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
