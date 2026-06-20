import { create } from 'zustand';
import type { SupportedLanguage } from '../types/explainer.types';
import { explainCode } from '../services/explainer.service';
import axios from 'axios';

interface ExplainerState {
  code: string;
  language: SupportedLanguage;
  explanation: string;
  isLoading: boolean;
  error: string | null;
  setCode: (code: string) => void;
  setLanguage: (language: SupportedLanguage) => void;
  explain: () => Promise<void>;
  reset: () => void;
}

export const useExplainerStore = create<ExplainerState>((set, get) => ({
  code: '',
  language: 'JavaScript',
  explanation: '',
  isLoading: false,
  error: null,

  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),

  explain: async () => {
    const { code, language } = get();
    if (!code.trim()) return;

    set({ isLoading: true, error: null, explanation: '' });

    try {
      const result = await explainCode({ code, language });
      set({ explanation: result.explanation });
    } catch (err) {
      // Kalau backend kasih response 400 dengan pesan spesifik, tampilin itu
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        set({ error: err.response.data.message });
      } else {
        set({ error: 'Gagal mendapatkan penjelasan. Pastikan backend lo jalan ya bro.' });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  reset: () => set({ code: '', explanation: '', error: null }),
}));
