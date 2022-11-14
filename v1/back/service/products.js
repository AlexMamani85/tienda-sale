const mysqlConnection = require('../config/database');

class ProductsService {

    constructor(){
      this.products = [];
      this.generate();
    }
  
    generate() {
        mysqlConnection.query('SELECT * FROM product ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        this.products = results;
      })
    }
  
    create(data) {
      console.log("data: ", data);
      const newProduct = {
        id: this.products.slice(-1)[0].id + 1,
        ...data
      }
      this.products.push(newProduct);
      console.log("newProduct: ", newProduct);
      return newProduct;
    }
  
    findAll(limit, offset) {
      return limit && offset ? this.products.slice(offset, limit) : this.products;
    }
  
    findOne(id) {
      const product = this.products.find(item => item.id == id);
      if (product == undefined) {
        throw new Error('Product not found');
      }
      return product;
    }
  
    update(id, changes) {
      const index = this.products.findIndex(item => item.id == id);
      if (index === -1) {
        throw new Error('Product not found');
      }
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index];
    }
  
    delete(id) {
      const index = this.products.findIndex(item => item.id == id);
      if (index === -1) {
        throw new Error('Product not found');
      }
      this.products.splice(index, 1);
      return { id };
    }
  
  }
  
  module.exports = ProductsService;