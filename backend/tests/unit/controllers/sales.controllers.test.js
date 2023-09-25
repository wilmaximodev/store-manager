const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.controller');
const salesServices = require('../../../src/services/sales.services');
const { allSalesMock, salesMockId } = require('../../mocks/sales.mock');

describe('Testando camada Controller de Sales', function () {
  it('Verifica se retorna todas as vendas', async function () {
    const req = {};
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    sinon.stub(salesServices, 'showAllSales').resolves({
      status: 200,
      data: allSalesMock,
    });

    await salesController.getAllSales(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(allSalesMock);
  });

  it('Verifica se retorna venda pelo Id', async function () {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    sinon.stub(salesServices, 'saleById').resolves({
      status: 200,
      data: salesMockId,
    });

    await salesController.getSaleById(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(salesMockId);
  });
});