export type SupportedLanguage = 'JavaScript' | 'TypeScript' | 'Python' | 'SQL' | 'Other';

export interface ExplainRequest {
  code: string;
  language: SupportedLanguage;
}

export interface ExplainResponse {
  success: boolean;
  explanation: string;
  language: SupportedLanguage;
}
