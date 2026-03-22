import { create } from 'zustand';

interface WaitlistState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useWaitlist = create<WaitlistState>((set: any) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
