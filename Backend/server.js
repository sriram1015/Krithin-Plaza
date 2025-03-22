const express = require('express');
const cors=require('cors');
const connectdb=require('./DB/db');
const admin=require('./Router/Admin');
const Cart=require('./Router/Cart');
const User=require('./Router/User');
const product=require('./Router/Productdetails');
const addproduct=require('./Router/AddProduct');
const bodyParser = require('body-parser');

const app=express();
const port =5002;
app.use(bodyParser.json());
app.use(cors());

connectdb();


app.use('/auth', authRoutes);
app.use('/add', addrole);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}.....✅`);
  });