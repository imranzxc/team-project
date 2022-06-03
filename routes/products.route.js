const { Router } = require("express");
const router = Router();
const {productsController} = require('../controllers/products.controller')

router.get('/products', productsController.getProducts);
router.get('/products/category/:id', productsController.getCategoryProducts);
router.get('/products/brand/:id', productsController.getBrandProducts);
router.post('admin/products', productsController.addProduct);
router.patch('admin/products/:id', productsController.patchProduct);
router.delete('admin/products/:id', productsController.deleteProduct);

module.exports = router;