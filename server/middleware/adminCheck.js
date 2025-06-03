const client = require('../db');

const adminCheck = async (req, res, next) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized: No user ID' });
  }

  try {
    const result = await client.query('SELECT role FROM users WHERE id = $1', [userId]);
    const user = result.rows[0];

    if (user?.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Access denied: Admins only' });
    }
  } catch (err) {
    console.error('Admin check failed:', err);
    res.status(500).json({ message: 'Server error in admin check' });
  }
};

module.exports = adminCheck;
