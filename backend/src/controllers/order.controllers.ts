import { Request, Response } from 'express';
import { OrderRepository } from '../repositories/order.repository'; // Asegúrate de que la ruta sea correcta
import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/order.dto';
import { OrderResponseDTO } from '../dtos/order.dto';

export class OrderController {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  public getOrdersController = async (req: Request, res: Response): Promise<void> => {
    try {
      const orders: OrderResponseDTO[] = await this.orderRepository.getAllOrders(); // Implementa getAllOrders en OrderRepository
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving orders', error });
    }
  };

  public getOrderByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const order: OrderResponseDTO | null = await this.orderRepository.getOrderById(id);
      if (order) {
        res.status(200).json({ order });
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving order', error });
    }
  };

  public createOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
      const orderData: CreateOrderDTO = req.body;
      const order: OrderResponseDTO = await this.orderRepository.createOrder(orderData);
      res.status(201).json({
        message: 'Order created',
        order,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error creating order', error });
    }
  };

  public updateOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const orderData: UpdateOrderDTO = req.body;
      const updatedOrder: OrderResponseDTO | null = await this.orderRepository.updateOrder(id, orderData);
      if (updatedOrder) {
        res.status(200).json({
          message: 'Order updated',
          order: updatedOrder,
        });
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating order', error });
    }
  };

  public deleteOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await this.orderRepository.deleteOrder(id);
      res.status(200).json({
        message: `Order ${id} deleted`,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting order', error });
    }
  };
}
