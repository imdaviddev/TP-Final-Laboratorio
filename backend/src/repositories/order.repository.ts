import { Repository } from 'typeorm';
import { Order } from '../models/order.models';
import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/order.dto';
import { OrderResponseDTO } from '../dtos/order.dto';
import { IOrderRepository } from '../interfaces/order.repository';

export class OrderRepository implements IOrderRepository {
  private orderRepository: Repository<Order>;

  constructor(orderRepository: Repository<Order>) {
    this.orderRepository = orderRepository;
  }

  async createOrder(data: CreateOrderDTO): Promise<OrderResponseDTO> {
    const order = this.orderRepository.create(data);
    await this.orderRepository.save(order);
    return this.mapToDTO(order);
  }

  async getOrderById(id: number): Promise<OrderResponseDTO | null> {
    const order = await this.orderRepository.findOneBy({ id });
    return order ? this.mapToDTO(order) : null;
  }

  async getAllOrders(): Promise<OrderResponseDTO[]> {
    const orders = await this.orderRepository.find();
    return orders.map(this.mapToDTO);
  }

  async updateOrder(id: number, data: UpdateOrderDTO): Promise<OrderResponseDTO | null> {
    const order = await this.getOrderById(id);
    if (order) {
      if (data.product !== undefined) order.product = data.product;
      if (data.amount !== undefined) order.amount = data.amount;
      await this.orderRepository.save(order);
      return order;
    }
    return null;
  }

  async deleteOrder(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }

  private mapToDTO(order: Order): OrderResponseDTO {
    return {
      id: order.id,
      customerId: order.customerId,
      product: order.product,
      amount: order.amount,
      createdAt: order.createdAt,
    };
  }
}
