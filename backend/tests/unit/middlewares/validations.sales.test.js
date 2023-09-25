const { expect } = require('chai'); 
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

chai.use(sinonChai);

const {
    validProduct,
    validQuant,
    validQuantProd,
    } = require('../../../src/middlewares/validation.sales');

describe('Testando Middlewares de sales', function () {
  it('Verifica se retorna mensagem de "productId" is required', function () {
    const req = {
      body: [{}],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    validProduct(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(
      { message: '"productId" is required' },
    );
    });

  it('Verifica se retorna a mensagem de "quantity" is required', function () {
    const req = {
      body: [{
        productId: 1,
      }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validQuant(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(
      { message: '"quantity" is required' },
    );
    });

  it('Verifica se retorna a mensagem de "quantity" must be greater than or equal to 1', function () {
    const req = {
      body: [{
        productId: 1,
        quantity: 0,
        }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    validQuantProd(req, res);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(
      { message: '"quantity" must be greater than or equal to 1' },
    );
  });

  it('Verifica se o next é chamado com o os valores corretos em validProduct', function () {
    const req = {
        body: [{
            productId: 1,
            quantity: 1,
        }],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub();
    validProduct(req, res, next);
    expect(next).to.have.been.calledWith();
  });
  
  it('Verifica se o next é chamado com o os valores corretos em validQuant', function () {
    const req = {
        body: [{
            productId: 1,
            quantity: 1,
        }],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub();
    validQuant(req, res, next);
    expect(next).to.have.been.calledWith();
  });

  it('Verifica se o next é chamado com o os valores corretos em validQuantProd', function () {
    const req = {
        body: [{
            productId: 1,
            quantity: 1,
        }],
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };
    const next = sinon.stub();
    validQuantProd(req, res, next);
    expect(next).to.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});