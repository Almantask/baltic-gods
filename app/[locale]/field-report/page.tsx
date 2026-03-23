'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FieldReport } from '@/types';

export default function FieldReportPage() {
  const t = useTranslations('fieldReport');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FieldReport>({
    location: '',
    contact: '',
    deities: '',
    description: '',
    references: '',
    siteType: '',
    coordinates: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Field report submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-12 rounded-lg text-center">
              <h1 className="text-6xl font-serif text-amber-gold mb-6">
                Wisdom Received
              </h1>
              <p className="text-xl italic text-amber-warm/80 mb-8">
                Your knowledge has been entrusted to the archive. The ancient paths
                grow clearer with your contribution.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    location: '',
                    contact: '',
                    deities: '',
                    description: '',
                    references: '',
                    siteType: '',
                    coordinates: '',
                  });
                }}
                className="px-8 py-3 bg-amber-gold text-background font-semibold rounded-lg hover:bg-amber-glow transition-colors"
              >
                Submit Another Report
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif text-amber-gold mb-4">
              {t('title')}
            </h1>
            <p className="text-2xl italic text-amber-warm/80">
              {t('subtitle')}
            </p>
          </div>

          {/* Form */}
          <div className="glass-panel p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Location Name */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.location')}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                  placeholder="Sacred Oak Grove of..."
                />
              </div>

              {/* Contact */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.contact')}
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                  placeholder="Your name or email (optional)"
                />
              </div>

              {/* Related Deities */}
              <div>
                <label
                  htmlFor="deities"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.deities')}
                </label>
                <input
                  type="text"
                  id="deities"
                  name="deities"
                  value={formData.deities}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                  placeholder="Perkūnas, Žemyna..."
                />
              </div>

              {/* Site Type */}
              <div>
                <label
                  htmlFor="siteType"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.siteType')}
                </label>
                <select
                  id="siteType"
                  name="siteType"
                  value={formData.siteType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm focus:outline-none focus:border-amber-gold/50 transition-colors"
                >
                  <option value="">Select type...</option>
                  <option value="Sacred Tree">Sacred Tree</option>
                  <option value="Stone">Sacred Stone</option>
                  <option value="Grove">Grove</option>
                  <option value="Hill">Ceremonial Hill</option>
                  <option value="Water">Water Source</option>
                  <option value="Altar">Altar</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.description')}
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors resize-none"
                  placeholder="Describe the sacred site, its history, legends, and significance..."
                />
              </div>

              {/* Coordinates */}
              <div>
                <label
                  htmlFor="coordinates"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.coordinates')}
                </label>
                <input
                  type="text"
                  id="coordinates"
                  name="coordinates"
                  value={formData.coordinates}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                  placeholder="55.1234, 24.5678"
                />
              </div>

              {/* References */}
              <div>
                <label
                  htmlFor="references"
                  className="block text-amber-warm mb-2 font-serif text-lg"
                >
                  {t('form.references')}
                </label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors resize-none"
                  placeholder="Sources, books, oral traditions..."
                />
              </div>

              {/* Map Picker CTA */}
              <div className="glass-panel p-8 rounded-lg text-center bg-moss-green/10">
                <p className="text-amber-warm/70 mb-4">
                  {t('form.mapCta')}
                </p>
                <button
                  type="button"
                  className="px-6 py-3 bg-moss-green/30 hover:bg-moss-green/40 text-amber-warm rounded-md transition-colors"
                >
                  Select on Map
                </button>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-amber-gold text-background font-serif text-xl font-semibold rounded-lg hover:bg-amber-glow transition-colors shadow-lg shadow-amber-gold/20"
                >
                  {t('form.submit')}
                </button>
              </div>
            </form>
          </div>

          {/* Poetic line */}
          <div className="mt-8 text-center">
            <p className="text-lg italic text-amber-warm/60">
              "Every stone remembers, every tree speaks"
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
