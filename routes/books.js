const Router = require("express").Router
const {Book}=require("..models");
const router=Router();

router.post("/books", (req,res)=>{
    const {title, authors, description, image, link} = req.body
    Book.create({
        title, authors, description, image, link
    }).then(savedBook =>{res.json(savedBook)})
});

router.get("")
module.exports=router;