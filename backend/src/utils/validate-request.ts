import { ExplainRequest, SupportedLanguage } from '../models/explainer.model';

const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  'JavaScript',
  'TypeScript',
  'Python',
  'SQL',
  'Other',
];

const MAX_CODE_LENGTH = 5000;

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export const validateExplainRequest = (body: unknown): ValidationResult => {
  if (!body || typeof body !== 'object') {
    return { valid: false, message: 'Request body harus berupa JSON object.' };
  }

  const { code, language } = body as Partial<ExplainRequest>;

  if (!code || typeof code !== 'string' || code.trim().length === 0) {
    return { valid: false, message: 'Field "code" wajib diisi dan tidak boleh kosong.' };
  }

  if (code.length > MAX_CODE_LENGTH) {
    return {
      valid: false,
      message: `Kode terlalu panjang. Maksimal ${MAX_CODE_LENGTH} karakter.`,
    };
  }

  if (!language || !SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)) {
    return {
      valid: false,
      message: `Field "language" harus salah satu dari: ${SUPPORTED_LANGUAGES.join(', ')}.`,
    };
  }

  return { valid: true };
};
