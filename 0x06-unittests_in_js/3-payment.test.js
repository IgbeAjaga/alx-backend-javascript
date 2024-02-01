const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(120);
    
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberStub.calledWith(100, 20)).to.be.true;
    
    calculateNumberStub.restore();
  });
});
