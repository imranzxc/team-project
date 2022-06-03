const { Router } = require('express');
const { brandController } = require('../controllers/brand.controller');
const router = Router();

router.post('/admin/brand', brandController.addBrand);
router.delete('/admin/brand/:id', brandController.deleteBrand);
router.patch('/admin/brand/:id', brandController.patchBrand);

module.exports = router;
