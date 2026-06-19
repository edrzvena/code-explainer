import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} tidak ditemukan.`,
  });
};

export const globalErrorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const message = error instanceof Error ? error.message : 'Internal server error.';
  console.error('[GlobalErrorHandler]', message);

  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server.',
  });
};
