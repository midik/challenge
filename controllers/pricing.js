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
     * @todo: try to move caching to the schema's post-hook (or to the mongoose plugin)
     */
    const items = await Price.find(couponName ? {couponName} : undefined).cache(240).exec();

    res.status(200).json(items);
};
