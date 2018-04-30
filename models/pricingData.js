/**
 * PricingData schema
 */

import mongoose from 'mongoose';


const schema = mongoose.Schema({
    couponName: String,
    pricingData: Object,
    createdAt: Date     // todo
});

export const Price = mongoose.model('pricingData.js', schema);
