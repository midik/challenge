/**
 * Pricing controller
 */

import {Price} from '../lib/db';

/**
 * Get pricing data for a coupon
 *
 * @param req
 * @param res
 */
export const get = async (req, res) => {

    const coupon = op.get(req, 'params.coupon');

    const items = Price.find();

    res.status(200).json({items});

};
