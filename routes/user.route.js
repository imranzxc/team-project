const { Router } = require("express");
const router = Router();
const {userController} = require('../controllers/user.controller')

router.post('/admin/user', userController.addUser);
router.patch('/admin/user/update/:id', userController.changeUser);
router.delete('/admin/user/remove/:id', userController.deleteUser);
router.patch('user/addToCart/:id', userController.addIntoCart);
router.patch('user/removeFromCart/:id', userController.removeFromCart);
router.get('/get/users', userController.getUsers);
router.get('/get/usersById', userController.getUserById);



module.exports = router;