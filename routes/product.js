import Express from 'express';
import productController from '../controllers/product.js';

const { productList, createProduct, } = productController;

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
     *     requestBody:
     *       content:
     *         'application/json':
     *           schema:
     *            properties:
     *               name:
     *                  type: string
     *               quantity:
     *                  type: number
     *     responses:
     *       200:
     *         description: Returns product create success message
     */
    .post('/product', createProduct);

export default route;
