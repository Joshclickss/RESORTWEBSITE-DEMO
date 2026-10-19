import React from 'react';
import { Badge } from '../components/Badge';
import { Leaf, Sun, Droplets, HeartHandshake, Trees, Award } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="bg-haven-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=80"
            alt="Wayanad Kerala sunset hills"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-4">
            Our Heritage & Story
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4">
            Conscious Luxury in God's Own Country
          </h1>
          <p className="text-sand-200 text-sm sm:text-base max-w-2xl mx-auto">
            Green Haven was born from a deep reverence for Kerala's rainforests and a commitment to preserving ancient architectural traditions while offering sublime comfort.
          </p>
        </div>
      </section>

      {/* Story & Editorial Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-haven-700">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-haven-950 leading-tight">
              Honoring Kerala's Architectural and Botanical Soul
            </h2>
            <p className="text-sand-700 text-sm sm:text-base leading-relaxed">
              Founded on the slopes of the Banasura range in Wayanad, Green Haven Resort was designed to leave the natural contours of the land untouched. Rather than leveling slopes, our cottages and pavilions are elevated on stilts and natural stone bases, allowing forest wildlife and mountain rivulets to traverse freely underneath.
            </p>
            <p className="text-sand-700 text-sm sm:text-base leading-relaxed">
              We drew inspiration from the classical Kerala <em>Nalukettu</em> style—incorporating sloping terracotta tiled roofs, naturally cooled courtyards, and reclaimed teakwood pillars crafted by local carpenters whose families have preserved these techniques for generations.
            </p>

            <div className="p-6 bg-sand-100 rounded-3xl border border-sand-200 italic font-serif text-sand-800 text-base">
              "We didn't build a resort in the forest; we invited the forest to encompass our sanctuary."
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-lg h-80 border border-sand-200">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
                alt="Kerala cottage design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-80 mt-8 border border-sand-200">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="Ayurveda and yoga in Kerala"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Philosophy */}
      <section className="bg-haven-900 text-white py-20 border-y border-haven-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Our Guiding Principle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-sand-50">
              Atithi Devo Bhava: The Guest is Sacred
            </h2>
            <p className="text-sand-300 text-sm mt-3">
              True luxury is not defined by excess, but by sincerity, thoughtfulness, and harmonious communion with nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-haven-950 p-8 rounded-3xl border border-haven-800">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Unobtrusive Attentiveness
              </h3>
              <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                Our hospitality is quiet, intuitive, and deeply personalized. We anticipate your desires while giving you absolute solitude to rest.
              </p>
            </div>

            <div className="bg-haven-950 p-8 rounded-3xl border border-haven-800">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Nature As The Teacher
              </h3>
              <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                Every space is open to natural breezes, sunlight, and the calming acoustic melodies of falling rain and chirping cicadas.
              </p>
            </div>

            <div className="bg-haven-950 p-8 rounded-3xl border border-haven-800">
              <div className="w-12 h-12 rounded-2xl bg-haven-800 text-gold-400 flex items-center justify-center mb-5 border border-gold-500/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Culinary Authenticity
              </h3>
              <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                No artificial shortcuts. Every dish honors time-tested Kerala culinary heritage using cold-pressed oils, freshly ground spices, and heritage grains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="haven" className="mb-2">
            Eco-Commitment
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-haven-950">
            Our Environmental Stewardship
          </h2>
          <p className="text-sand-600 text-sm mt-2">
            Preserving Wayanad's fragile montane ecosystem through actionable eco-innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-sand-100 border border-sand-200">
            <div className="w-10 h-10 rounded-xl bg-haven-700 text-white flex items-center justify-center mb-4">
              <Sun className="w-5 h-5 text-gold-300" />
            </div>
            <h4 className="font-serif font-bold text-base text-haven-950 mb-2">
              70% Solar Powered
            </h4>
            <p className="text-xs text-sand-700 leading-relaxed">
              Our rooftop solar micro-grid powers room heating, estate lighting, and hot water systems cleanly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-sand-100 border border-sand-200">
            <div className="w-10 h-10 rounded-xl bg-haven-700 text-white flex items-center justify-center mb-4">
              <Droplets className="w-5 h-5 text-gold-300" />
            </div>
            <h4 className="font-serif font-bold text-base text-haven-950 mb-2">
              Rainwater Harvesting
            </h4>
            <p className="text-xs text-sand-700 leading-relaxed">
              Extensive monsoon catchment reservoirs recharge groundwater tables and irrigate organic spice gardens.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-sand-100 border border-sand-200">
            <div className="w-10 h-10 rounded-xl bg-haven-700 text-white flex items-center justify-center mb-4">
              <Leaf className="w-5 h-5 text-gold-300" />
            </div>
            <h4 className="font-serif font-bold text-base text-haven-950 mb-2">
              Zero Single-Use Plastics
            </h4>
            <p className="text-xs text-sand-700 leading-relaxed">
              Glass water bottles, bamboo amenities, and clay pottery replace disposable plastics across all accommodations.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-sand-100 border border-sand-200">
            <div className="w-10 h-10 rounded-xl bg-haven-700 text-white flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5 text-gold-300" />
            </div>
            <h4 className="font-serif font-bold text-base text-haven-950 mb-2">
              Local Community Support
            </h4>
            <p className="text-xs text-sand-700 leading-relaxed">
              Over 85% of our staff and artisan partners are indigenous residents of the Wayanad hill communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-sand-200 border border-sand-300 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-haven-950 mb-2">
              Plan Your Retreat to Nature
            </h3>
            <p className="text-sand-700 text-sm max-w-lg">
              Explore our rooms, check demo pricing, and discover true tranquility at Green Haven.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Enquire For Stay
          </button>
        </div>
      </section>
    </div>
  );
};
