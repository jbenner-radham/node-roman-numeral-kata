const { expect } = require('chai');
const app = require('../lib');

describe('Roman Numeral App', function () {
    it('is a function', function () {
        expect(app).to.be.a('function');
    });
});
