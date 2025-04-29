require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const apiRoutes = require('./routes');
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', apiRoutes);

http
    .createServer(app)
    .listen(PORT, () => {
        console.log(`Server running on the port:${PORT}`);
    });