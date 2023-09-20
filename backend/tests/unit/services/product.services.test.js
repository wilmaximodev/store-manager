const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
const productsServices = require('../../../src/services/products.services');
const productsModels = require('../../../src/models/products.model');
const { mockProducts, mockProductsId } = require('../../mocks/products.mock');

chai.use(sinonChai);

describe('Testando camada service de produtos', function () {
  it('Verifica se é possível listar todos os produtos', async function () {
    sinon.stub(productsModels, 'getAll').resolves(mockProducts);
    
    const product = await productsServices.showAllProducts();
    
    expect(product.status).to.be.equals(200);
  });
  it('Verifica se é possivel encontrar um produto pelo Id', async function () {
    sinon.stub(productsModels, 'getById').resolves(mockProductsId);
    
    const product = await productsServices.productById(1);
    
    expect(product).to.be.deep.equal({ status: 200, data: mockProductsId });
  });
});