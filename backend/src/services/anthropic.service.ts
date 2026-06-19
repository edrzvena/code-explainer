import { env } from '../config/env';
import { SupportedLanguage } from '../models/explainer.model';
import { buildSystemPrompt, buildUserPrompt } from '../utils/build-prompt';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-6';
const MAX_TOKENS = 1024;

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AnthropicRequestBody {
  model: string;
  max_tokens: number;
  system: string;
  messages: AnthropicMessage[];
}

interface AnthropicContentBlock {
  type: string;
  text?: string;
}

interface AnthropicResponse {
  content: AnthropicContentBlock[];
}

export const explainCodeWithClaude = async (
  code: string,
  language: SupportedLanguage
): Promise<string> => {
  const body: AnthropicRequestBody = {
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: buildSystemPrompt(),
    messages: [
      {
        role: 'user',
        content: buildUserPrompt(code, language),
      },
    ],
  };

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.anthropicApiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${errorText}`);
  }

  const data = (await response.json()) as AnthropicResponse;

  const textBlock = data.content.find((block) => block.type === 'text');
  if (!textBlock || !textBlock.text) {
    throw new Error('Tidak ada respons teks dari Anthropic API.');
  }

  return textBlock.text;
};
