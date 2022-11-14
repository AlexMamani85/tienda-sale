// @desc    Get all Products
// @route   GET /api/v1/products
// @access  Public 
exports.getProducts = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: 'Show all products'});
  }
  
// @desc    Get One Product
// @route   GET /api/v1/products/:id
// @access  Public 
exports.getProduct = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Display Product with id: ${req.params.id}` });
  }

// @desc    Create One Product
// @route   POST /api/v1/products/:id
// @access  Public 
exports.createProduct=(req, res, next)=>{
    res.status(200).json({ 
      success: true, 
      msg: 'Create new product'});
  }

// @desc    Update Product
// @route   PUT /api/v1/products
// @access  Public
  exports.updateProduct = (req, res, next)=>{
    res
      .status(200)
      .json({ success: true, msg: `Update Product with id: ${req.params.id}`});
  }
  
  
// @desc    Delete New Product
// @route   DELETE /api/v1/products
// @access  Public
  exports.deleteProduct = (req, res, next)=>{
    res
      .status(200)
      .json({ success: true, msg: `Delete Product with id: ${req.params.id}`});
  }
