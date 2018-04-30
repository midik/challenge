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

        it('should return an empty array', (done) => {

            const req = {query: {coupon: 'fake'}};

            const res = resFactory((result) => {
                expect(result).to.be.an('array').that.is.empty;
                done();
            });

            pricing.get(req, res);
        });


        it('should return a non-empty array', (done) => {

            const req = {};

            const res = resFactory((result) => {
                expect(result).to.be.an('array').that.is.not.empty;
                done();
            });

            pricing.get(req, res);
        });


        // etc ...

    });
});
