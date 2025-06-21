const swaggerJSDoc = require('swagger-jsdoc');
const config = require('../../config');
const port = config.port;
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'E-commerce API',
        version: '1.0.0',
        description: 'API para sistema de e-commerce con autenticación, gestión de productos, pedidos y cupones',
        },
        servers: [
        {
            url: `http://localhost:${port}`,
            description: 'Servidor local',
        },
        ],
        components: {
        securitySchemes: {
            BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            },
        },
        schemas: {
                Order: {
                    type: 'object',
                    required: ['userId', 'items'],
                    properties: {
                        userId: { type: 'string', description: 'ID del usuario' },
                        items: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/OrderItem',
                            },
                            description: 'Lista de productos en el pedido',
                        },
                        total: { type: 'number', description: 'Total del pedido' },
                        status: { 
                            type: 'string', 
                            enum: ['pending', 'completed', 'cancelled'],
                            description: 'Estado del pedido',
                            default: 'pending'
                        },
                        couponCode: { 
                            type: 'string', 
                            description: 'Cupón aplicado (opcional)' 
                        },
                        createdAt: { 
                            type: 'string', 
                            format: 'date-time', 
                            description: 'Fecha de creación del pedido' 
                        },
                    },
                },
                OrderItem: {
                    type: 'object',
                    required: ['productId', 'quantity'],
                    properties: {
                        productId: { 
                            type: 'string', 
                            description: 'ID del producto' 
                        },
                        quantity: { 
                            type: 'number', 
                            description: 'Cantidad del producto' 
                        },
                        price: { 
                            type: 'number', 
                            description: 'Precio unitario al momento del pedido' 
                        },
                    },
                },
                Coupon: {
                    type: 'object',
                    required: ['code', 'discount', 'expiresAt'],
                    properties: {
                        code: { 
                            type: 'string', 
                            description: 'Código del cupón' 
                        },
                        discount: { 
                            type: 'number', 
                            description: 'Porcentaje de descuento (ej: 10 para 10%)' 
                        },
                        expiresAt: { 
                            type: 'string', 
                            format: 'date-time', 
                            description: 'Fecha de expiración del cupón' 
                        },
                        isActive: { 
                            type: 'boolean', 
                            description: 'Indica si el cupón está activo',
                            default: true
                        },
                    },
                },
            Product: {
            type: 'object',
            required: ['name', 'price'],
            properties: {
                name: { 
                type: 'string',
                description: 'Nombre del producto'
                },
                price: { 
                type: 'number',
                description: 'Precio del producto'
                },
                description: { 
                type: 'string',
                description: 'Descripción del producto'
                },
            },
            },
            User: {
            type: 'object',
            required: ['username', 'email', 'password'],
            properties: {
                username: { 
                type: 'string',
                description: 'Nombre de usuario'
                },
                email: { 
                type: 'string',
                format: 'email',
                description: 'Correo electrónico del usuario'
                },
                password: { 
                type: 'string',
                format: 'password',
                description: 'Contraseña del usuario'
                },
                roles: {
                type: 'array',
                items: {
                    type: 'string'
                },
                description: 'Roles del usuario',
                default: ['user']
                }
            },
            },
            LoginRequest: {
            type: 'object',
            required: ['username', 'password'],
            properties: {
                username: {
                type: 'string',
                description: 'Nombre de usuario'
                },
                password: {
                type: 'string',
                format: 'password',
                description: 'Contraseña del usuario'
                }
            }
            },
            AuthResponse: {
            type: 'object',
            properties: {
                user: {
                $ref: '#/components/schemas/User'
                },
                token: {
                type: 'string',
                description: 'JWT token de autenticación'
                }
            }
            }
        },
        },
    },
    apis: ['./src/adapters/routes/*.js']
};

module.exports = swaggerJSDoc(options);