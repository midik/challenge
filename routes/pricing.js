import express from 'express';
import * as controller from './controllers/pricing';

const router = express.Router();


router.get('/pricing', controller.pricing);

module.exports = router;
