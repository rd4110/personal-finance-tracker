// BASIC CONECTION OF ALL ROUTES Is FROM index.js
const express = require('express');

const router = express.Router();
const imageRoute = require('./image-route'); // ADD IMAGES
const categoryRoutes = require('./category-routes');
const userRoutes = require('./user-routes');
const transactionRoutes = require('./transaction-routes');

router.use('/upload', imageRoute);

router.use('/user', userRoutes);

router.use('/transaction', transactionRoutes);

router.use('/category', categoryRoutes);

module.exports = router;
