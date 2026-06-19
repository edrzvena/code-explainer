import { Request, Response } from 'express';
import { explainCodeWithClaude } from '../services/anthropic.service';
import { ExplainRequest, ExplainResponse, ApiErrorResponse } from '../models/explainer.model';
import { validateExplainRequest } from '../utils/validate-request';

export const explainCode = async (
  req: Request,
  res: Response<ExplainResponse | ApiErrorResponse>
): Promise<void> => {
  const validation = validateExplainRequest(req.body);

  if (!validation.valid) {
    res.status(400).json({
      success: false,
      message: validation.message ?? 'Request tidak valid.',
    });
    return;
  }

  const { code, language } = req.body as ExplainRequest;

  try {
    const explanation = await explainCodeWithClaude(code, language);

    res.status(200).json({
      success: true,
      explanation,
      language,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Terjadi kesalahan tidak dikenal.';
    console.error('[ExplainerController] Error:', message);

    res.status(500).json({
      success: false,
      message: 'Gagal mendapatkan penjelasan dari AI. Coba lagi nanti.',
    });
  }
};
