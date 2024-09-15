import { Router } from 'express';
import { OrderController } from '../controllers/';
import { OrderRepository } from '../repositories/';
import { AppDataSource } from '../config/';
import { Order } from '../models/';

const router = Router();

// Crea una instancia del repositorio y del controlador
const orderRepository = new OrderRepository(AppDataSource.getRepository(Order));
const orderController = new OrderController(orderRepository);

// Define las rutas para las órdenes
router.get('/orders', orderController.getOrdersController);
router.get('/orders/:id', orderController.getOrderByIdController);
router.post('/orders', orderController.createOrderController);
router.put('/orders/:id', orderController.updateOrderController);
router.delete('/orders/:id', orderController.deleteOrderController);

export default router;