import Mocha from 'mocha';
const mocha = new Mocha();

mocha.addFile('tests/pricingData.js');

mocha.run();
