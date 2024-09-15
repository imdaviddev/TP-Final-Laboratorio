import { IOrderRepository } from '../interfaces/order.repository';
import { CreateOrderDTO, UpdateOrderDTO, OrderResponseDTO } from '../dtos/order.dto';

export class OrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(data: CreateOrderDTO): Promise<OrderResponseDTO> {
    return this.orderRepository.createOrder(data);
  }

  async getOrderById(id: number): Promise<OrderResponseDTO | null> {
    return this.orderRepository.getOrderById(id);
  }

  async updateOrder(id: number, data: UpdateOrderDTO): Promise<OrderResponseDTO | null> {
    return this.orderRepository.updateOrder(id, data);
  }

  async deleteOrder(id: number): Promise<void> {
    return this.orderRepository.deleteOrder(id);
  }
}
