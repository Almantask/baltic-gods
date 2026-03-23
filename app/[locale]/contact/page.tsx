'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Report a Location
          </h1>
          <p className="text-xl text-slate-600">
            Help us expand our database of sacred sites
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Thank You!
              </h2>
              <p className="text-slate-600">
                Your submission has been received. We'll review it shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Location Name
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="deity"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Associated Deity
                </label>
                <input
                  type="text"
                  id="deity"
                  name="deity"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="coordinates"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Coordinates (optional)
                </label>
                <input
                  type="text"
                  id="coordinates"
                  name="coordinates"
                  placeholder="e.g., 54.6872, 25.2797"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition font-semibold text-lg"
              >
                Submit Report
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            What to include:
          </h3>
          <ul className="space-y-2 text-amber-800 text-sm">
            <li>• Exact location name and address if available</li>
            <li>• Associated deity or mythological significance</li>
            <li>• Historical context or archaeological findings</li>
            <li>• GPS coordinates for precise mapping</li>
            <li>• Photos or references (can be added later)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
