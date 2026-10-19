import React, { useState } from 'react';
import { Badge } from '../components/Badge';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Car,
  Plane,
  Train
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/site';

export const Contact: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');

  // Status & Validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (phone.trim().length < 8) {
      errs.phone = 'Phone number must have at least 8 digits';
    }
    if (!message.trim()) {
      errs.message = 'Please enter your message or question';
    } else if (message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
  };

  const whatsappGeneralMessage = `Hello Green Haven Resort! I am reaching out from your website contact page regarding an enquiry for our upcoming trip to Kerala.`;
  const { url: whatsappUrl, isConfigured: isWhatsAppConfigured } = getWhatsAppLink(whatsappGeneralMessage);

  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="bg-haven-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
            alt="Wayanad Resort Pathway"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-4">
            Connect With Us
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4">
            Location & Concierge Contact
          </h1>
          <p className="text-sand-200 text-sm sm:text-base max-w-2xl mx-auto">
            Have questions about travel routes, seasonal weather, or private cottage reservations? Our team is at your disposal.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Fictional Contact Data: Phone and email details are demo placeholders.</span>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-sand-200">
            <div className="mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-haven-950">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-sand-600 mt-1">
                Fill in the demo form below to test our interactive validation and feedback.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-sand-50 rounded-2xl border border-sand-200 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-haven-950">
                  Message Dispatched (Demo)
                </h3>
                <p className="text-sm text-sand-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>! Your demo enquiry has been validated successfully. In a live system, this would trigger an email notification to our resort team.
                </p>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left max-w-md mx-auto">
                  <strong>Notice:</strong> This is a frontend demo. No actual email has been sent. You can also connect via WhatsApp using the button below.
                </div>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-sand-800 bg-sand-200 hover:bg-sand-300 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  {isWhatsAppConfigured && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-sand-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Radhika Nair"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-sand-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-haven-700 ${
                      errors.name ? 'border-red-500' : 'border-sand-300'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-sand-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. radhika@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-sand-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-haven-700 ${
                        errors.email ? 'border-red-500' : 'border-sand-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-sand-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 94470 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-sand-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-haven-700 ${
                        errors.phone ? 'border-red-500' : 'border-sand-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sand-700 uppercase tracking-wider mb-1">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm bg-sand-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-haven-700"
                  >
                    <option value="General Enquiry">General Stay Enquiry</option>
                    <option value="Group or Family Booking">Group or Family Booking</option>
                    <option value="Dining & Banquets">Dining, Sadhya & Banquets</option>
                    <option value="Airport Transfer Assistance">Airport Transfer Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sand-700 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How may we assist your upcoming journey to Green Haven Resort?..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-sand-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-haven-700 ${
                      errors.message ? 'border-red-500' : 'border-sand-300'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-haven-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Form...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Demo Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, WhatsApp Link, Access directions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-haven-900 text-white rounded-3xl p-6 sm:p-8 border border-haven-800 shadow-lg space-y-5">
              <h3 className="font-serif text-xl font-bold text-white pb-3 border-b border-haven-800">
                Resort Concierge Desk
              </h3>

              <div className="space-y-4 text-sm text-sand-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Resort Address</span>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Telephone (Reception)</span>
                    <a href={`tel:${siteConfig.contact.displayPhone}`} className="hover:text-gold-300">
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Email Enquiries</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Guest Operations</span>
                    <span>{siteConfig.contact.receptionHours}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="pt-4 border-t border-haven-800">
                {isWhatsAppConfigured ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                ) : (
                  <div className="p-3 bg-haven-950 rounded-xl text-xs text-sand-400 border border-haven-800">
                    <span className="text-gold-400 font-semibold block mb-0.5">WhatsApp Setup:</span>
                    Configure phone in <code>siteConfig.contact.whatsappNumber</code> to activate live chat.
                  </div>
                )}
              </div>
            </div>

            {/* Travel Directions / Transit Information */}
            <div className="bg-sand-100 rounded-3xl p-6 sm:p-8 border border-sand-200 space-y-4">
              <h4 className="font-serif font-bold text-lg text-haven-950">
                Getting to Green Haven
              </h4>

              <div className="space-y-3 text-xs text-sand-800">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-haven-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nearest Airport:</strong>
                    <p className="text-sand-600">{siteConfig.location.nearestAirport}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-haven-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nearest Railway Station:</strong>
                    <p className="text-sand-600">{siteConfig.location.nearestRailway}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-haven-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Road Access:</strong>
                    <p className="text-sand-600">
                      Scenic drive along the Thamarassery Churam mountain pass connecting Kozhikode to Wayanad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section with Valid Location Configured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-sand-200 bg-sand-200">
          <div className="bg-haven-900 text-white p-4 px-6 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Sanctuary Coordinates: Banasura Foothills, Vythiri, Wayanad</span>
            </div>
            <span className="text-sand-400 hidden sm:inline">Google Maps Interactive Preview</span>
          </div>

          {siteConfig.location.googleMapsEmbedUrl ? (
            <div className="w-full h-80 sm:h-96">
              <iframe
                title="Green Haven Resort Location Map"
                src={siteConfig.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="h-80 flex flex-col items-center justify-center p-6 text-center text-sand-700">
              <MapPin className="w-10 h-10 text-haven-700 mb-2" />
              <p className="font-serif font-bold text-lg">Location Map</p>
              <p className="text-xs text-sand-500 max-w-sm">
                Map embed configured in siteConfig.location.googleMapsEmbedUrl.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
