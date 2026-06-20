export interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AnthropicRequestBody {
  model: string;
  max_tokens: number;
  system: string;
  messages: AnthropicMessage[];
}

export interface AnthropicContentBlock {
  type: string;
  text?: string;
}

export interface AnthropicResponse {
  content: AnthropicContentBlock[];
}