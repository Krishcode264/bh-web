"use client";

import React, { useState } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";

interface Props {
  onClose?: () => void;
}

const WaitlistForm = ({ onClose }: Props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", city: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await joinWaitlist(formData);
    
    if (result.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", city: "" });
    } else {
      setError(result.error || "Failed to join waitlist");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="w-full max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px] border border-outline-variant/20 relative">
        <div className="w-full p-12 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">You're on the list! 🎉</h3>
          <p className="text-lg text-gray-600 mb-8">We'll let you know as soon as Rallyo launches in your city.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => setSuccess(false)}
              className="bg-violet-100 text-violet-700 px-6 py-3 rounded-full font-bold hover:bg-violet-200 transition-colors"
            >
              Join another city
            </button>
            {onClose && (
              <button 
                onClick={onClose}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors z-20"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px] border border-outline-variant/20 relative">
      {/* Left Side: Purple Background */}
      <div className="md:w-5/12 bg-[#7c3aed] p-12 flex flex-col justify-center text-white relative">
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/20 text-white font-bold text-xs tracking-widest uppercase shadow-sm">
            Early Access
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Get Rallyo before anyone else
          </h2>
          <p className="text-white/80 text-lg mb-10 opacity-90">
            Find companions for real activities near you. Be the first in your city when we launch.
          </p>
          
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold text-surface-container-lowest border-2 border-[#7c3aed]">R</div>
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-[10px] font-bold text-surface-container-lowest border-2 border-[#7c3aed]">M</div>
              <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-[10px] font-bold text-surface-container-lowest border-2 border-[#7c3aed]">A</div>
              <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#7c3aed]">S</div>
              <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#7c3aed]">k</div>
            </div>
            <p className="text-xs font-bold text-white/90 opacity-90">+212 waiting</p>
          </div>
        </div>
      </div>

      {/* Right Side: Form Card */}
      <div className="md:w-7/12 bg-white p-12 flex flex-col justify-center relative">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto w-full">
          <div>
            <label className="block text-[10px] font-black text-primary tracking-widest uppercase mb-2">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-zinc-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface placeholder:text-zinc-400"
              placeholder="Rohan"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-primary tracking-widest uppercase mb-2">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-zinc-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface placeholder:text-zinc-400"
              placeholder="rohan@gmail.com"
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-black text-primary tracking-widest uppercase mb-2">Your City</label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-zinc-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface placeholder:text-zinc-400"
              placeholder="Mumbai, Delhi, Bangalore..."
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-waitlist-gradient text-white px-8 py-5 rounded-full text-lg font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
          >
            {loading ? "Joining..." : "Join the waitlist"} {!loading && <span className="material-symbols-outlined text-xl">arrow_forward</span>}
          </button>
          
          {error && (
            <p className="text-center text-red-500 text-xs font-bold mt-2">
              {error}
            </p>
          )}
          
          <p className="text-center text-zinc-500 text-xs font-medium mt-6">
            No spam. Only connections.
          </p>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
