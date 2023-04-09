const Express = require('express');
const { productList, createProduct, } = require('../controllers/product');

const route = Express
    .Router()
    /**
     * @swagger
     * /product:
     *   get:
     *     tags:
     *       - Product
     *     description: List Products
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Returns product list
     */
    .get('/product', productList)

    /**
     * @swagger
     * /product:
     *   post:
     *     tags:
     *       - Product
     *     description: Create a product
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Create a new product
     *         description: Product object
     *         in: body
     *         required: true
     *         schema:
     *           properties:
     *              name:
     *                  type: string
     *              quantity:
     *                  type: number
     *     responses:
     *       200:
     *         description: Returns product create success message
     */
    .post('/product', createProduct);

module.exports = route;
