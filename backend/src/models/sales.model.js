const connection = require('./connection');

const getAll = async () => {
    const [sales] = await connection.execute(
      `SELECT
      sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
      FROM StoreManager.sales_products AS sp
      JOIN StoreManager.sales AS s
      ON sp.sale_id = s.id
      ORDER BY sp.sale_id, sp.product_id;`,
    );
    return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT
    s.product_id AS productId, s.quantity, sap.date 
    FROM sales AS sap
    INNER JOIN sales_products AS s 
    ON sap.id = s.sale_id
    WHERE sap.id = ?`,
    [id],
    );
    return sale;
};

const createSaleModel = async () => {
  const [newDateSale] = await connection.execute(
    'INSERT INTO sales (date) VALUES (now())',
  );
  return newDateSale;
};

const createSalesProductModel = async (data) => {
  const { insertId } = await createSaleModel();
  data.map(async (sale) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [insertId, sale.productId, sale.quantity],
    );
  });
  return { id: insertId, itemsSold: data };
};

module.exports = {
  getAll,
  getById,
  createSalesProductModel,
};