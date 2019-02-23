const { expect } = require('chai');
const convert = require('../lib');

describe('Roman Numeral Converter', function () {
    it('is a function', function () {
        expect(convert).to.be.a('function');
    });

    it('returns a number', function () {
        expect(convert('I')).to.be.a('number');
    });

    it('converts I to 1', function () {
        expect(convert('I')).to.equal(1);
    });

    it('converts V to 5', function () {
        expect(convert('V')).to.equal(5);
    });

    it('converts X to 10', function () {
        expect(convert('X')).to.equal(10);
    });

    it('converts L to 50', function () {
        expect(convert('L')).to.equal(50);
    });

    it('converts C to 100', function () {
        expect(convert('C')).to.equal(100);
    });

    it('converts D to 500', function () {
        expect(convert('D')).to.equal(500);
    });

    it('converts M to 1000', function () {
        expect(convert('M')).to.equal(1000);
    });

    it('converts IV to 4', function () {
        expect(convert('IV')).to.equal(4);
    });

    it('converts VI to 6', function () {
        expect(convert('VI')).to.equal(6);
    });

    it('converts VII to 7', function () {
        expect(convert('VII')).to.equal(7);
    });

    it('converts VIII to 8', function () {
        expect(convert('VIII')).to.equal(8);
    });

    it('converts VIIII to NaN', function () {
        expect(convert('VIIII')).to.eql(NaN);
    });

    it('converts IX to 9', function () {
        expect(convert('IX')).to.equal(9);
    });

    it('converts MMXIX to 2019', function () {
        expect(convert('MMXIX')).to.equal(2019);
    });

    it('converts VV to to NaN', function () {
        expect(convert('VV')).to.eql(NaN);
    });
});
