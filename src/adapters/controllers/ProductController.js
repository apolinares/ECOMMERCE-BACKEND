const CreateProduct = require('../../application/useCases/CreateProduct');
const ProductDTO = require('../../application/dtos/ProductDTO');

class ProductController {
  constructor(productRepository) {
     this.productRepository = productRepository;
     this.createProduct = new CreateProduct(productRepository);
  }

  async create(req, res) {
    try {
      console.log('>>> Request body:', req.body);
      const productData = {
        ...req.body,
        stock: req.body.stock || 0 // Valor por defecto si no se proporciona
      };
      const product = await this.createProduct.execute(productData);
      res.status(201).json(new ProductDTO(product));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const products = await this.productRepository.getAll();
      const productsDTO = products.map(product => new ProductDTO(product));
      res.status(200).json(productsDTO);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving products' });
    }
  }

}

module.exports = ProductController;
