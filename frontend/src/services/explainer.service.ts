import axios from 'axios';
import { API_BASE_URL } from '../config/api';
import type { ExplainRequest, ExplainResponse } from '../types/explainer.types';

export const explainCode = async (payload: ExplainRequest): Promise<ExplainResponse> => {
  const { data } = await axios.post<ExplainResponse>(
    `${API_BASE_URL}/api/explainer/explain`,
    payload
  );
  return data;
};
