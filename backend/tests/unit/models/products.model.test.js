const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const productModels = require('../../../src/models/products.model');
const { mockProducts } = require('../../mocks/products.mock');

const newProduct = 'Martelo de Odin';

const { expect } = chai;

chai.use(sinonChai);

describe('Testando a camada model de produtos', function () {
  it('Verifica se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);
  
    const products = await productModels.getAll();

    expect(products).to.be.deep.equal(mockProducts);
    expect(products).to.be.an('array');
    expect(products[0]).to.be.an('object');
    expect(products[0]).to.have.all.keys('id', 'name');
  });
  it('Verifica se retorna o produto correto pelo Id', async function () {
    const id = 1;
    sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
    const product = await productModels.getById(id);
    expect(product).to.be.deep.equal(mockProducts[0]);
    sinon.restore();
    const secondId = 2;
    sinon.stub(connection, 'execute').resolves([[mockProducts[1]]]);
    const secondProduct = await productModels.getById(secondId);
    expect(secondProduct).to.be.deep.equal(mockProducts[1]);
    sinon.restore();
    const thirdId = 3;
    sinon.stub(connection, 'execute').resolves([[mockProducts[2]]]);
    const thirdProduct = await productModels.getById(thirdId);
    expect(thirdProduct).to.be.deep.equal(mockProducts[2]);
  });
  
  it('Verifica se adiciona produto corretamente', async function () {
    sinon.stub(connection, 'execute').resolves([{
      insertId: 4,
    }]);

    const product = await productModels.newProduct(newProduct);

    expect(product.id).to.be.equal(4);
    expect(product).to.have.all.keys('id', 'name');
  });

  it('Verifica se atualiza um produto corretamente', async function () {
    const product = {
      id: 1,
      name: 'product',
  };

  sinon.stub(connection, 'execute').resolves([product]);

  const result = await productModels.updateProduct(1, 'product');

  expect(result).to.be.deep.equal(product);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});