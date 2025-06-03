const client = require("../db");

// 👥 Get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await client.query("SELECT id, username, email, role, created_at FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("🔴 Error fetching users:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
};

// 📦 Get all orders
const getAllOrders = async (req, res) => {
  try {
    const result = await client.query("SELECT id, useremail AS email, total, status, createdat AS order_date FROM orders");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("🔴 Error fetching orders:", error);
    res.status(500).json({ message: "Server error fetching orders" });
  }
};

// 💬 Get all feedback
const getAllFeedback = async (req, res) => {
  try {
    const result = await client.query("SELECT id, useremail AS email, message AS feedback, createdat AS created_at FROM feedback");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("🔴 Error fetching feedback:", error);
    res.status(500).json({ message: "Server error fetching feedback" });
  }
};

// 🔁 Get all returns
const getAllReturns = async (req, res) => {
  try {
    const result = await client.query(`
      SELECT r.id, r.orderid AS order_id, o.useremail AS email, r.productname, r.reason, r.status, r.createdat AS return_date 
      FROM returns r
      LEFT JOIN orders o ON r.orderid = o.id
    `);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("🔴 Error fetching returns:", error);
    res.status(500).json({ message: "Server error fetching returns" });
  }
};

// 🔐 Get all logins
const getAllLogins = async (req, res) => {
  try {
    const result = await client.query("SELECT id, user_id, email, login_time FROM logins ORDER BY login_time DESC");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("🔴 Error fetching logins:", error);
    res.status(500).json({ message: "Server error fetching logins" });
  }
};

module.exports = {
  getAllUsers,
  getAllOrders,
  getAllFeedback,
  getAllReturns,
  getAllLogins,
};