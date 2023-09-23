const sinon = require('sinon');
const chai = require('chai');
const productsServices = require('../../../src/services/products.services');
const productsController = require('../../../src/controllers/products.controller');
const { mockProducts, addProduct } = require('../../mocks/products.mock');

const { expect } = chai;

describe('Testando camada controller de produtos', function () {
  afterEach(function () {
        sinon.restore();
    });

  it('Verifica se retorna todos os produtos', async function () {  
    const req = {};
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
    };

    sinon.stub(productsServices, 'showAllProducts').resolves({
        status: 200,
        data: mockProducts,
      });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(mockProducts);
    });

  it('Verifica se retorna um produto pelo Id', async function () {
    const req = {
        params: {
          id: 1,
        },
      };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const product = {
      id: 1,
      name: 'Martelo de Thor',
    };

    sinon.stub(productsServices, 'productById').resolves({
      status: 200,
      data: product,
    });

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(product);
  });

  it('Testa a rota /products/:id com getById e erro', async function () {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(productsServices, 'productById').resolves({
      status: 404,
      data: {
        message: 'Product not found',
      },
    });
    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWithExactly({ message: 'Product not found' });
  });

  it('Verifica se é possivel adicionar novo produto', async function () {
    sinon.stub(productsServices, 'createProduct').resolves({
      status: 201,
      data: addProduct,
    });

    const req = {
      body: {
        name: 'Alicate do Homem de Ferro',
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.addProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWithExactly(addProduct);
  });

  it('Verifica se é possível atualizar um produto', async function () {
    sinon.stub(productsServices, 'updateProduct').resolves(addProduct);

    const req = {
      params: {
        id: 4,
      },
      body: {
        name: 'Alicate do Homem de Ferro',
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.updateProduct(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(addProduct)).to.be.equal(true);
  });

  it('Será validado que é possível atualizar um produto e retorna erro caso não exista', async function () {
    const req = { params: { id: 10 }, body: { name: 'Bicicleta' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        sinon.stub(productsServices, 'updateProduct').resolves({ message: 'Product not found' });

        await productsController.updateProduct(req, res);

        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
});