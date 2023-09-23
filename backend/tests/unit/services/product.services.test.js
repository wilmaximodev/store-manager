const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
const productsServices = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model');
const { mockProducts, mockProductsId } = require('../../mocks/products.mock');

chai.use(sinonChai);

describe('Testando camada service de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível listar todos os produtos', async function () {
    sinon.stub(productsModel, 'getAll').resolves(mockProducts);
    
    const product = await productsServices.showAllProducts();
    expect(product.status).to.be.equals(200);
  });
  it('Verifica se é possivel encontrar um produto pelo Id', async function () {
    sinon.stub(productsModel, 'getById').resolves(mockProductsId);
    
    const product = await productsServices.productById(1);
    expect(product).to.be.deep.equal({ status: 200, data: mockProductsId });
  });

  it('Verifica se retorna erro ao buscar Id inexistente', async function () {
    sinon.stub(productsModel, 'getById').resolves(undefined);
  
    const product = await productsServices.productById(1);
    expect(product.status).to.be.equal(404);
    expect(product.data.message).to.be.equal('Product not found');
  });

  it('Verifica se adiciona um novo produto corretamente', async function () {
    sinon.stub(productsModel, 'newProduct').resolves({
      id: 4,
      name: 'Cinto de utilidades do Batman',
    });

    const product = await productsServices.createProduct('Cinto de utilidades do Batman');

    expect(product.status).to.be.equals(201);
    expect(product.data).to.have.property('id');
    expect(product.data).to.have.property('name');
  });
});