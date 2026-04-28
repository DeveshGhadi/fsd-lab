const express = require('express');
const dotenv = require('dotenv');
const mongooose = require('mongoose');
const connectDB = require('./src/config/db');
const logger = require("./src/middleware/logger");
const errorHandler = require("./src/middleware/errorHandler");
const productRouter = require("./src/routes/product");

dotenv.config();    //retrieves .env file
connectDB();   //call connectDB


const app = express();


//BuiltIn Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger);
app.use(errorHandler);

app.get('/api/products',productRouter);

//--------start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
