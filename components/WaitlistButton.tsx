"use client";

import React from 'react';
import { useWaitlist } from '@/store/useWaitlist';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function WaitlistButton({ className, children }: Props) {
  const { openModal } = useWaitlist();
  
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
