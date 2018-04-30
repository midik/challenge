/**
 * PricingData schema
 */

import mongoose from 'mongoose';


const schema = mongoose.Schema({
    couponName: {
        type: String,
        index: true
    },
    pricingData: Object
}, {
    collection: 'pricingData'
});


export const Price = mongoose.model('pricingData', schema);
