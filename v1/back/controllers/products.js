const ProductsService = require("../service/products");
const service = new ProductsService();

// @desc    Get all Products
// @route   GET /api/v1/products
// @route   GET /api/v1/products?size=10&offset=10
// @access  Public 
exports.getProducts = (req, res, next) => {
  try{
    const { size, offset } = req.query;
    const limit = size;
    const products = service.findAll(limit, offset);
    res
      .status(200)
      .json({ success: true, result: products});
  } catch (error){
    res
    .status(404)
    .json({ message: error.message });
  }
}
// @desc    Get One Product
// @route   GET /api/v1/products/:id
// @access  Public 
exports.getProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message });
  }
}

// @desc    Create One Product
// @route   POST /api/v1/products
// @access  Public 
exports.createProduct=  (req, res, next)=>{
  try {
    const body = req.body;
    console.log("req: ", Object.keys(req.params));
    console.log("body: ", body);
    const newProduct = service.create(body);

    res.status(201).json({
      success: true, 
      result: newProduct });
  } catch (error) {
    res
    .status(404)
    .json({ message: error.message })
  }


};

// @desc    Update Product
// @route   PUT /api/v1/products
// @access  Public
  exports.updateProduct = async (req, res, next)=>{

    try {
      let body = req.body;
      console.log()
      console.log("req.BODY from updateProduct: ", req.body);
      product = service.update(req.params.id, req.body);

      res.status(200).json({
        success: true, 
        result: product });
    } catch (error) {
      res
      .status(404)
      .json({ message: error.message })
    }
  }
  
  
// @desc    Delete New Product
// @route   DELETE /api/v1/products
// @access  Public
  exports.deleteProduct = (req, res, next)=>{

    try {
      const product = service.delete(req.params.id);
      res
        .status(200)
        .json({success: true, result: product});
    } catch (error) {
      res
      .status(404)
      .json({ message: error.message })
    }


;
  }
