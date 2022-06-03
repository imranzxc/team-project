const Brand = require("../models/Brand.model");


module.exports.brandController = {
    addBrand: async(req,res) =>{
        try{
            await Brand.create(req.body.title)
            res.json("Brand added")
        }catch(err) {
            res.json(err)
        }
    },
    patchBrand: async(req,res) =>{
        try{
            await Brand.findByIdAndUpdate(req.params.id, {title: req.body.title})
            res.json("Brand updated")
        }catch(err){
            res.json(err)
        }
    },
    deleteBrand: async(req,res) => {
        try{
            await Brand.findByIdAndDelete(req.params.id)
            res.json('Brand deleted')
        }catch(err) {
            res.json(err)
        }
    },
    getAllBrend: async(req,res) =>{
        try{
            const brands = await Brand.find()
            res.json(brands)
        }catch(err) {
         res.json(err)}
    },
    getOneBrand: async (req,res) =>{
        try{
            const br =  await Brand.findById(req.params.id)
            res.json(br)
        }catch(err){
            res.json(err)
        }
    }
};

