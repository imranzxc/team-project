const { Router } = require('express');
const { categoryController } = require('../controllers/category.controller');
const router = Router();

router.post('/admin/category', categoryController.postCategory);
router.delete('/admin/category/:id', categoryController.deleteCategory);
router.patch('/admin/category/:id', categoryController.patchCategory);
router.get('/user/category', categoryController.AllCategory);

module.exports = router;
