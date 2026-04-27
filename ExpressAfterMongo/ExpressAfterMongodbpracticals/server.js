const express = require('express');
const dotenv = require('dotenv');
const mongooose = require('mongoose');
const connectDB = require('./src/config/db.js');

dotenv.config();    //retrieves .env file
connectDB();   //call connectDB




const app = express();


//BuiltIn Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ message: 'Product API is running!' });
});

//--------start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
