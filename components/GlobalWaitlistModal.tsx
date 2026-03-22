"use client";

import React from 'react';
import { useWaitlist } from '@/store/useWaitlist';
import WaitlistForm from './WaitlistForm';

export default function GlobalWaitlistModal() {
  const { isOpen, closeModal } = useWaitlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={closeModal} />
      
      <div className="relative w-[95%] max-w-4xl max-h-[95vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-sm z-10 transition-colors"
        >
          ✕
        </button>
        <WaitlistForm onClose={closeModal} />
      </div>
    </div>
  );
}
