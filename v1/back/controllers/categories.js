const CategoriesService = require("../service/categories");
const service = new CategoriesService();

// @desc    Get all Categories
// @route   GET /api/v1/categories
// @route   GET /api/v1/categories?size=10&offset=10
// @access  Public 
exports.getCategories = (req, res, next) => {
  try{
    const { size, offset } = req.query;
    const limit = size;
    const categories = service.findAll(limit, offset);
    res
      .status(200)
      .json({ success: true, result: categories});
  } catch (error){
    res
    .status(404)
    .json({ message: error.message });
  }
}
// @desc    Get One Category
// @route   GET /api/v1/categories/:id
// @access  Public 
exports.getCategory = (req, res, next) => {
  try {
    const { id } = req.params;
    const category = service.findOne(id);
    res.json(category);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message });
  }
}

// @desc    Create One Category
// @route   POST /api/v1/categories
// @access  Public 
exports.createCategory=  (req, res, next)=>{
  try {
    const body = req.body;
    const newCategory = service.create(body);

    res.status(201).json({
      success: true, 
      result: newCategory });
  } catch (error) {
    res
    .status(404)
    .json({ message: error.message })
  }


};

// @desc    Update Category
// @route   PUT /api/v1/categories
// @access  Public
  exports.updateCategory = async (req, res, next)=>{

    try {
      let body = req.body;
      category = service.update(req.params.id, req.body);

      res.status(200).json({
        success: true, 
        result: category });
    } catch (error) {
      res
      .status(404)
      .json({ message: error.message })
    }
  }
  
  
// @desc    Delete New Category
// @route   DELETE /api/v1/categories
// @access  Public
  exports.deleteCategory = (req, res, next)=>{

    try {
      const category = service.delete(req.params.id);
      res
        .status(200)
        .json({success: true, result: category});
    } catch (error) {
      res
      .status(404)
      .json({ message: error.message })
    }


;
  }
