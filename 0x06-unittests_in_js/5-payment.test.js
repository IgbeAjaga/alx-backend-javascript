const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should log correct message and only be called once', () => {
    calculateNumberStub.returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log correct message and only be called once', () => {
    calculateNumberStub.returns(20);
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
