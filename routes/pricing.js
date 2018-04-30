import express from 'express';
import * as pricing from '../controllers/pricing';


/**
 * routes definition
 */
export default ({app, asyncErrorHandler}) => {

    const router = express.Router();

    app.use('/pricing', router);

    router.get('/', asyncErrorHandler(pricing.get));

};
