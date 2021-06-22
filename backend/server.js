require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());

app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));