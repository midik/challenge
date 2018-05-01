/**
 * Pricing controller
 */

import op from 'object-path';
import {Coupon} from '../lib/db';


/**
 * Get pricing data for a coupon
 *
 * @param req
 * @param res
 */
export const get = async (req, res) => {

    /**
     * prepare coupon name or assume that it's empty.
     * this way, "a one record w/o a coupon" should have an empty-string coupon name.
     */
    const name = op.get(req, 'query.coupon', '');

    /**
     * fetch the record(s)
     */
    const item = await Coupon.findOne({name}, '-_id name pricingData')
        .populate('pricingData', '-_id')
        .cache(240)     // todo more comphressive caching
        .exec();

    /**
     * ensure that we got an item (op.get doesn't work here because of typeof(item) in not an Object)
     */
    res.status(200).json(item ? item.pricingData : {});
};
