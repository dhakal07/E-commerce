const client = require('../db');

// Add a new product
const addProduct = async (req, res) => {
  const { title, price, description, stock } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO products (title, price, description, stock) VALUES ($1, $2, $3, $4) RETURNING id',
      [title, price, description, stock]
    );
    res.status(201).json({ message: 'Product added successfully', productId: result.rows[0].id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addProduct, getAllProducts };
