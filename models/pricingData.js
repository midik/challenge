/**
 * PricingData schema
 */

import mongoose from 'mongoose';


const schema = mongoose.Schema({
    couponName: {
        type: String,
        index: true
    },
    pricingData: {
        type: Object
        // unique : true
    }
}, {
    collection: 'pricingData',
    id: false
});


/**
 * unused at this point
 */
export const Price = mongoose.model('pricingData', schema);
