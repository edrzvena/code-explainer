import { Router } from 'express';
import { explainCode } from '../controllers/explainer.controller';

const explainerRouter = Router();

explainerRouter.post('/explain', explainCode);

export default explainerRouter;
