const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);


app.use('/api/auth', authRoutes);


const app = express();
require('dotenv').config();


// Enable CORS for requests from the React frontend running on localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',  // Allow React frontend on localhost:3000
  methods: 'GET,POST',             // Allow GET and POST methods
  allowedHeaders: 'Content-Type,Authorization',  // Allow headers
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Hello from the E-commerce server!');
});

// Set the port from environment variable or default to 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
