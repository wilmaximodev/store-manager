const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const { allSalesMock, salesMockId } = require('../../mocks/sales.mock');
const { salesModel } = require('../../../src/models');

describe('Testando camada model de sales', function () {
  it('Verifica se retorna todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesMock]);
    
    const sales = await salesModel.getAll();
    expect(sales).to.be.equal(allSalesMock);
    expect(sales).to.have.lengthOf(3);
  });

  it('Verifica se retorna a venda pelo Id', async function () {
    sinon.stub(connection, 'execute').resolves([salesMockId]);

    const sale = await salesModel.getById(1);
    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal(salesMockId);
  });

  afterEach(function () {
    sinon.restore();
  });
});