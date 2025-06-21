const express = require("express");
const router = express.Router();

module.exports = (couponController) => {
  /**
   * @swagger
   * /coupons:
   *   post:
   *     summary: Crear un cupón de descuento
   *     tags: [Coupons]
   *     security:
   *       - BearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Coupon'
   *     responses:
   *       201:
   *         description: Cupón creado
   */
  router.post('/', (req, res) => couponController.create(req, res));

  /**
   * @swagger
   * /coupons/{code}:
   *   get:
   *     summary: Validar un cupón
   *     tags: [Coupons]
   *     parameters:
   *       - in: path
   *         name: code
   *         schema:
   *           type: string
   *         required: true
   *     responses:
   *       200:
   *         description: Cupón válido
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Coupon'
   */
  router.get('/:code', (req, res) => couponController.validate(req, res));

  return router;
};