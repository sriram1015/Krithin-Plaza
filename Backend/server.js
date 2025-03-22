const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/db');
const bodyParser = require('body-parser');

const adminRoutes = require('./Router/Admin');
const cartRoutes = require('./Router/Cart');
const userRoutes = require('./Router/User');
const productRoutes = require('./Router/Productdetails');
const addProductRoutes = require('./Router/AddProduct');

const app = express();
const port = 5002;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/auth', adminRoutes);
app.use('/cart', cartRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/add-product', addProductRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port} ✅`);
});
