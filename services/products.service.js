const Products = require('../models/Products.model');

class ProductsService {
  async getProducts() {
    const products = await Products.find({});
    return products
  }

  async getCategoryProducts(id) {
    const catProds = await Products.findById({ category: id });
    return catProds
  }

  async getBrandProducts(products) {
    const brandProds = await Products.findById({ brand: products });
    return brandProds
  }

  async addProduct(product) {
    const prods = await Products.create({ ...product });
    return prods
  }

  async patchProduct(product) {
    const prods = await Products.findByIdAndUpdate(product._id, product, { new: true })
    return prods
  }

  async deleteProduct(id) {
    const prods = await Products.findByIdAndRemove(id);
    return prods
  }
}

module.exports.ProductsService = ProductsService
