#!/usr/bin/env node

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should stub Utils.calculateNumber and verify console.log', () => {
        // Create a stub for Utils.calculateNumber
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        
        // Create a spy for console.log
        const consoleSpy = sinon.spy(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify the stub was called with correct arguments
        assert.strictEqual(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20), true);
        
        // Verify console.log was called with correct message
        assert.strictEqual(consoleSpy.calledOnceWithExactly('The total is: 10'), true);

        // Restore both the stub and the spy
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
