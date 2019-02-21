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

    it('converts L to 50', function () {
        expect(app('L')).to.equal(50);
    });

    it('converts C to 100', function () {
        expect(app('C')).to.equal(100);
    });

    it('converts D to 500', function () {
        expect(app('D')).to.equal(500);
    });

    it('converts M to 1000', function () {
        expect(app('M')).to.equal(1000);
    });

    it('converts IV to 4', function () {
        expect(app('IV')).to.equal(4);
    });

    it('converts VI to 6', function () {
        expect(app('VI')).to.equal(6);
    });

    it('converts VII to 7', function () {
        expect(app('VII')).to.equal(7);
    });

    it('converts VIII to 8', function () {
        expect(app('VIII')).to.equal(8);
    });

    it('converts VIIII to NaN', function () {
        expect(app('VIIII')).to.eql(NaN);
    });

    it('converts IX to 9', function () {
        expect(app('IX')).to.equal(9);
    });

    it('converts MMXIX to 2019', function () {
        expect(app('MMXIX')).to.equal(2019);
    });
});
