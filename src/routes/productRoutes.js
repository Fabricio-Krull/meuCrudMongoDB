import express from 'express';

import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getProducts);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;