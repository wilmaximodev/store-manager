const { expect } = require('chai');
const sinon = require('sinon');
const { validateProduct } = require('../../../src/middlewares/validation.products');

describe('Testes na Middleware de produtos', function () {
  it('Verifica se retorna a mensagem de limite minimo de caracteres', function () {
    const req = {
      body: {
        name: 'Pro',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returns(),
    };
    const next = sinon.stub().returns();

    validateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ 
        message: '"name" length must be at least 5 characters long', 
    });
  });

  it('Verifica se retorna a mensagem de "name" is required', function () {
    const req = {
      body: {
      name: '',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returns(),
    };
    const next = sinon.stub().returns();

    validateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
   });
});