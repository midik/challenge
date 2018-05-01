/**
 * Coupon schema
 */

import mongoose from 'mongoose';


const schema = mongoose.Schema({
    name: {
        type: String,
        index: true
    }
}, {
    collection: 'coupon',
    toObject: {virtuals: true}
});

/**
 * Kinda link to the prices
 */
schema.virtual('pricingData', {
    ref: 'pricingData',
    localField: 'name',
    foreignField: 'couponName',
    justOne: true
}, {
    id: false
});


export const Coupon = mongoose.model('Coupon', schema);
