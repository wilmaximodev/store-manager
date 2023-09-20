const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const newProduct = async (name) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO products (name)
    VALUES (?)`, [name]);

  return {
    id: insertId,
    name,
  };
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