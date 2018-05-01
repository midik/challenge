import {expect} from 'chai';
import * as pricing from '../controllers/pricing';


/**
 * res factory
 */
const resFactory = (json) => ({
    status: () => ({
        json
    })
});


/**
 * controllers
 */
describe('Pricing', () => {

    describe('GET /price', () => {

        it('should return an empty object', (done) => {

            const req = {query: {coupon: 'fake'}};

            const res = resFactory((result) => {
                expect(result).to.be.an('object').that.is.empty;
                done();
            });

            pricing.get(req, res);
        });


        it('should return a valid object', (done) => {

            const req = {};

            const res = resFactory((result) => {
                expect(result).to.be.an('object');
                expect(result).to.have.a.property('couponName').that.is.a('string');
                expect(result).to.have.a.property('pricingData').that.is.an('object');
                done();
            });

            pricing.get(req, res);
        });


        // etc ...

    });
});
