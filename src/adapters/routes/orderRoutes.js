const express = require("express");
const router = express.Router();

module.exports = (orderController) => {
  /**
   * @swagger
   * /orders:
   *   post:
   *     summary: Crear un nuevo pedido
   *     tags: [Orders]
   *     security:
   *       - BearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Order'
   *     responses:
   *       201:
   *         description: Pedido creado exitosamente
   */
  router.post('/', (req, res) => orderController.create(req, res));

  /**
   * @swagger
   * /orders/{id}:
   *   get:
   *     summary: Obtener un pedido por ID
   *     tags: [Orders]
   *     security:
   *       - BearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Detalles del pedido
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Order'
   */
  router.get('/:id', (req, res) => orderController.getById(req, res));

  router.patch('/:id/status', (req, res) => orderController.updateStatus(req, res));

  return router;
};