import express from 'express';
import * as pricing from '../controllers/pricing';

const router = express.Router();


router.get('/pricing', pricing.get);

export default router;
