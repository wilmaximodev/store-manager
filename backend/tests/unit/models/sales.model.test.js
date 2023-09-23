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

  it('Testa se é possível criar uma Venda', async function () {
    const sale = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const saleDb = {
      id: 1,
      itemsSold: sale,
    };

    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await salesModel.createSalesProductModel(sale);

    expect(result).to.be.deep.equal(saleDb);
});

  afterEach(function () {
    sinon.restore();
  });
});