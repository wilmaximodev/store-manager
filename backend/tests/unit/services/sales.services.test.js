const sinon = require('sinon');
const { expect } = require('chai');
const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const salesModels = require('../../../src/models/sales.model');
const salesServices = require('../../../src/services/sales.services'); 
const { allSalesMock, salesMockId } = require('../../mocks/sales.mock');

describe('Testando camada service de Sales', function () {
  it('Verifica se retorna todas as vendas', async function () {
    sinon.stub(salesModels, 'getAll').resolves([allSalesMock]);

    const sales = await salesServices.showAllSales();
    expect(sales).to.have.property('status');
    expect(sales.status).to.be.equals(200);
    expect(sales.data).to.be.an('array');
    });

  it('Verifica se retorna a venda pelo Id', async function () {
    sinon.stub(salesModels, 'getById').resolves(salesMockId);

    const sale = await salesServices.saleById(1);
    expect(sale).to.be.deep.equal({ status: 200, data: salesMockId });
  });
});