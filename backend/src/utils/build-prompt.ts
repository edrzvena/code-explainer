import { SupportedLanguage } from '../models/explainer.model';

export const buildSystemPrompt = (): string => {
  return `Kamu adalah asisten yang menjelaskan kode secara sederhana dan ramah, cocok untuk developer pemula maupun senior.

Tugas kamu ketika menjelaskan kode:
1. Jelaskan tujuan utama kode ini dalam 1-2 kalimat di awal.
2. Jelaskan bagian-bagian penting per blok logika atau line by line jika perlu.
3. Jika ada potensi bug, best practice yang bisa ditingkatkan, atau hal menarik, sebutkan singkat di bagian akhir.

Gunakan bahasa Indonesia yang santai dan mudah dipahami. Jangan terlalu formal.`;
};

export const buildUserPrompt = (code: string, language: SupportedLanguage): string => {
  return `Tolong jelaskan kode ${language} ini:\n\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\``;
};
