import { ExplainRequest, SupportedLanguage } from '../models/explainer.model';

const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  'JavaScript',
  'TypeScript',
  'Python',
  'SQL',
  'Other',
];

const MAX_CODE_LENGTH = 1000;
const MIN_CODE_LENGTH = 5;

const CODE_INDICATORS = [
  /[{}()\[\];=<>]/,
  /\b(const|let|var|function|def|class|import|export|return|if|for|SELECT|FROM)\b/i,
  /[a-zA-Z_]\w*\s*[=(]/,
  /\/\/|\/\*|#\s|--\s/,
];

const JAILBREAK_PATTERNS = [
  /abaikan\s+instruksi/i,
  /ignore\s+(previous|all|your)\s+instruct/i,
  /forget\s+(your|all|previous)/i,
  /you\s+are\s+now/i,
  /pretend\s+(you|to)/i,
  /act\s+as\s+(a\s+)?(?!.*developer)/i,
  /jangan\s+jadi\s+asisten/i,
  /lupakan\s+(instruksi|perintah)/i,
];

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

const looksLikeCode = (input: string): boolean => {
  const hasCodeSyntax = CODE_INDICATORS.some((pattern) => pattern.test(input));

  const nonAlphaCount = (input.match(/[^a-zA-Z\s]/g) || []).length;
  const nonAlphaRatio = nonAlphaCount / input.length;
  const hasEnoughSymbols = nonAlphaRatio >= 0.05;

  return hasCodeSyntax && hasEnoughSymbols;
};

const containsJailbreak = (input: string): boolean => {
  return JAILBREAK_PATTERNS.some((pattern) => pattern.test(input));
};

export const validateExplainRequest = (body: unknown): ValidationResult => {
  if (!body || typeof body !== 'object') {
    return { valid: false, message: 'Request body harus berupa JSON object.' };
  }

  const { code, language } = body as Partial<ExplainRequest>;

  if (!code || typeof code !== 'string' || code.trim().length === 0) {
    return { valid: false, message: 'Field "code" wajib diisi dan tidak boleh kosong.' };
  }

  if (code.trim().length < MIN_CODE_LENGTH) {
    return { valid: false, message: 'Kode terlalu pendek. Minimal 5 karakter.' };
  }

  if (code.length > MAX_CODE_LENGTH) {
    return {
      valid: false,
      message: `Kode terlalu panjang. Maksimal ${MAX_CODE_LENGTH} karakter.`,
    };
  }

  if (containsJailbreak(code)) {
    return {
      valid: false,
      message: 'Input tidak valid. Masukkan kode program yang valid.',
    };
  }

  if (!looksLikeCode(code)) {
    return {
      valid: false,
      message: 'Input tidak terdeteksi sebagai kode program. Pastikan lo paste kode yang valid.',
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