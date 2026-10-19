import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-sand-200">
        <div className="w-16 h-16 rounded-full bg-haven-100 text-haven-800 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase font-semibold text-gold-700 tracking-widest block mb-2">
          Page Not Found
        </span>
        <h1 className="font-serif text-3xl font-bold text-haven-950 mb-3">
          404 - Lost on the Trail
        </h1>
        <p className="text-sand-600 text-sm mb-8 leading-relaxed">
          The resort trail you are following doesn't seem to exist or may have moved deeper into the forest.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-haven-900 hover:bg-haven-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/rooms"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-sand-800 bg-sand-100 hover:bg-sand-200 border border-sand-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Rooms</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
