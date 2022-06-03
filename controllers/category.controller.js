const Category = require("../models/Category.model");

module.exports.categoryController = {

// Admin route
  postCategory: async (req, res) => {
    try {
      const categoryPost = await Category.create({
     title: String,
      });
      res.json(categoryPost);
    } catch (error) {
    res.json(error)
    }
  },

  // Admin route
  deleteCategory: async (req, res) => {
      try {
      const categoryDelete = await Category.findByIdAndRemove(req.params.id) 
      res.json(categoryDelete)   
      } catch (error) {
       res.json(error)   
      }
  },

// Admin route
  patchCategory: async (req, res) => {
      try {
       const categoryPatch = await Category.findByIdAndUpdate({
           title: String
       })
       res.json(categoryPatch)   
      } catch (error) {
         res.json(error) 
      }
  },



  // User route
AllCategory: async (req, res) => {
    try {
     const CategoryAll = await Category.find()   
     res.json(CategoryAll)
    } catch (error) {
    res.json(error)  
    }
}






};
