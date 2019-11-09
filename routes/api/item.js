const express = require('express');
const router = express.Router();
//auth add
const auth = require('../../middleware/Auth');
//end auth

//item model
const Item = require('../../models/Item');

//@route  GET api/item
//@desc   Get all item
//@access Public
router.get('/', (req, res, next)=>{
    Item.find()
        .sort({date: -1}) //descending
        .then(item => res.json(item));
});

//@route  POST api/item
//@desc   Create an item
//@access Private
//adding auth for validation
router.post('/', auth,(req, res, next)=>{
    const newItem= new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//@route  Delete api/item/:id
//@desc   Delete an item
//@access Private
//adding auth for validation
router.delete('/:id', auth,(req, res, next)=>{
    console.log(req.params.id);
    Item.findById(req.params.id)

   .then(item => item.remove().then (() => res.json({success:true})))
   .catch(err => res.status(404).json({success: false}));
});
module.exports= router;