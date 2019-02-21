const { expect } = require('chai');
const app = require('../lib');

describe('Roman Numeral App', function () {
    it('is a function', function () {
        expect(app).to.be.a('function');
    });

    it('converts I to 1', function () {
        expect(app('I')).to.equal(1);
    });

    it('converts V to 5', function () {
        expect(app('V')).to.equal(5);
    });

    it('converts X to 10', function () {
        expect(app('X')).to.equal(10);
    });
});
