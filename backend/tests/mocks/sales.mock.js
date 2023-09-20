const SALE_DATE = '2023-09-15T16:15:29.000Z';

const allSalesMock = [
  {
    saleId: 1,
    date: SALE_DATE,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: SALE_DATE,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: SALE_DATE,
    productId: 3,
    quantity: 15,
  },
];

const salesMockId = [
  {
    productId: 1,
    date: '2023-09-18T21:36:00.000Z',
    quantity: 5,
  },
  {
    productId: 2,
    date: '2023-09-18T21:36:00.000Z',
    quantity: 10,
  },
];

module.exports = {
  allSalesMock,
  salesMockId,
};