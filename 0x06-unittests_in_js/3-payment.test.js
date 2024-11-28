#!/usr/bin/env node

const sinon = require('sinon');
const assert = require('assert');
const Utils  = require('./utils');
const { utils } = require('mocha');


describe('sendPaymentRequestToApi', () =>{
    it('should call Utils.calculateNumber with correct arguments', () => {

        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        assert.strictEqual(spy.calledOnceWithExactly('SUM', 100, 20), true);

        spy.restore();
    });
});
