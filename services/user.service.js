const User = require('../models/User.model');

class UserService {
  async addUser(user) {
    const createUser = await User.create({ ...product });
    return createUser
  }

  async getUsers() {
    const getUsers = await User.find();
    return getUsers
  }

  async getUserById() {
    const userById = await User.findById(req.params.id);
    return userById
  }

  async changeUser() {
    const userChanged = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    return userChanged
  }

  async deleteUser() {
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    return deleteUser
  }
  async addIntoCart(id, body) {
    const addCart = await User.findByIdAndUpdate(id, {
      $push: { cart: body },
    });
    return addCart
  }
  async removeFromCart(id, body) {
    const addCart = await User.findByIdAndUpdate(id, {
      $pull: { cart: body },
    });
    return addCart
  }
}

module.exports.UserService = UserService