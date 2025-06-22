const express = require('express');
const config = require('./config');
console.log('>>> Config leída:', config);
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const MongoCustomerRepository = require('./infraestructure/repositories/MongoCustomerRepository');
const MySQLProductRepository = require('./infraestructure/repositories/MySQLProductRepository');
const ProductController = require('./adapters/controllers/ProductController');
const CustomerController = require('./adapters/controllers/CustomerController');
const productRoutes = require('./adapters/routes/productRoutes');
const customerRoutes = require('./adapters/routes/customerRoutes');
const { verifyToken } = require('./adapters/middlewares/authJwt');
const { refreshToken } = require('./adapters/middlewares/authJwt');
const { isAdmin } = require('./adapters/middlewares/authRoles');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./infraestructure/docs/swaggerConfig');
const MongoUserRepository     = require('./infraestructure/repositories/MongoUserRepository');
const PasswordHasher          = require('./infraestructure/services/PasswordHasher');
const TokenGenerator          = require('./infraestructure/services/TokenGenerator');
const SignIn                  = require('./application/useCases/SignIn');
const authRoutes              = require('./adapters/routes/authRoutes');
const userRoutes          = require('./adapters/routes/userRoutes');
const SignUp              = require('./application/useCases/SignUp');

const app = express();
const port = config.port;
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dependencies
const dbType = config.DB_TYPE || 'mongodb'; // 'mongo' o 'mysql'
let productRepository, customerRepository;
console.log('>>> DB_TYPE:', dbType);

if (dbType === 'mysql') {
  productRepository = new MySQLProductRepository();
} else {
  productRepository = new MongoProductRepository();
  customerRepository = new MongoCustomerRepository();
}
// —– SETUP AUTH —–
const userRepo       = new MongoUserRepository();
const passwordHasher = new PasswordHasher();
const tokenGen       = new TokenGenerator();
const signInUseCase  = new SignIn(userRepo, passwordHasher, tokenGen);
app.use('/api/v1/auth', authRoutes(signInUseCase));

// ——— SETUP SIGNUP ———
const signUpUseCase = new SignUp(userRepo, passwordHasher);
app.use('/api/v1/users',express.json(),userRoutes(signUpUseCase));

const productController = new ProductController(productRepository);
const customerController = new CustomerController(customerRepository);

// Configuración de Swagger UI
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.use('/api/v1/products', verifyToken, refreshToken, isAdmin, productRoutes(productController));
app.use('/api/v1/customers', verifyToken, refreshToken, customerRoutes(customerController));
//app.use('/api/v1/products', productRoutes(productController));
//app.use('/api/v1/customers', customerRoutes(customerController));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port http://localhost:${port}`);
});