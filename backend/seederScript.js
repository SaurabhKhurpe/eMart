require('dotenv').config();

const productData = require('./data/product');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Data Import Fail");
        process.exit(1);
    }
}

importData();