#!/usr/bin/env node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should correctly sum rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.4), 5);
            assert.strictEqual(calculateNumber('SUM', 1.6, 4.5), 7);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should correctly subtract rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.4), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 1.5), 4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should correctly divide rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.4), 0.25);
            assert.strictEqual(calculateNumber('DIVIDE', 8.6, 2.5), 3);
        });

        it('should return "Error" when dividing by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
        });
    });
});
