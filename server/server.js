require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { Pool } = require('pg'); // Added for explicit database connection

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
const auth = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce_db',
  password: '09781',
  port: '5433',
});

pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('✅ Connected to PostgreSQL database');
  }
});

// 🪵 Log all requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url} from ${req.ip}`);
  next();
});

// 🌍 CORS config
app.use(cors({
  origin: true, // Allow all origins for now (adjust for production)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.options('*', cors());

app.use(express.json());
app.use(morgan('dev'));

// 🌐 Public routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// 🔐 Protected routes
app.use('/api/admin', auth, adminRoutes);

// 🏠 Root endpoint
app.get('/', (req, res) => {
  res.send('🛒 Welcome to the E-commerce backend server!');
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

// Handle process termination to close database connection
process.on('SIGTERM', () => {
  pool.end(() => {
    console.log('Database pool closed');
    process.exit(0);
  });
});