/**
 * Pricing controller
 */

import op from 'object-path';
import {Price} from '../lib/db';


/**
 * Get pricing data for a coupon
 *
 * @param req
 * @param res
 */
export const get = async (req, res) => {

    const couponName = op.get(req, 'query.coupon');

    /**
     * fetch the record(s)
     */
    const items = await Price.find(couponName ? {couponName} : undefined).cache(240).exec();

    res.status(200).json(items);
};
