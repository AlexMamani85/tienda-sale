const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res
    .status(200)
    .json({ success: true, msg: 'Show all products'});
});

router.get('/:id', (req,res)=>{
  res
    .status(200)
    .json({ success: true, msg: `Display Product with id: ${req.params.id}` });
});


router.post('/', (req,res)=>{
  res.status(200).json({ 
    success: true, 
    msg: 'Create new product'});
});

router.put('/:id', (req,res)=>{
  res
    .status(200)
    .json({ success: true, msg: `Update Product with id: ${req.params.id}`});
});

router.delete('/:id', (req,res)=>{
  res
    .status(200)
    .json({ success: true, msg: `Delete Product with id: ${req.params.id}`});
});


module.exports = router;