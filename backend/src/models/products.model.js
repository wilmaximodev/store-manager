const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const newProduct = async (name, productID) => {
  const updated = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, productID],
  );
  return updated;
};

const updateProduct = async (id, name) => {
  const [productUpdat] = await connection.execute(
    `UPDATE products
    SET name = ? 
    WHERE id = ?`,
    [name, id],
  );
  return productUpdat;
};

module.exports = {
  getAll,
  getById,
  newProduct,
  updateProduct,
};