const express = require("express");
const router = express.Router();

module.exports = (productController) => {
  router.get('/', (req, res) => productController.getAll(req, res));
  router.post('/', (req, res) => productController.create(req, res));
  router.patch('/:id/stock', ProductController.updateStock);

  return router;
};
