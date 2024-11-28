#!/usr/bin/env node

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should correctly sum rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 1.4, 4.4)).to.equal(5);
            expect(calculateNumber('SUM', 1.6, 4.5)).to.equal(7);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should correctly subtract rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 1.4, 4.4)).to.equal(-3);
            expect(calculateNumber('SUBTRACT', 5.6, 1.5)).to.equal(4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should correctly divide rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber('DIVIDE', 1.4, 4.4)).to.equal(0.25);
            expect(calculateNumber('DIVIDE', 8.6, 2.5)).to.equal(3);
        });

        it('should return "Error" when dividing by zero', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
        });
    });
});
