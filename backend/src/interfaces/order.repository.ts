import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/order.dto';
import { OrderResponseDTO } from '../dtos/order.dto';

export interface IOrderRepository {
  createOrder(data: CreateOrderDTO): Promise<OrderResponseDTO>;
  getOrderById(id: number): Promise<OrderResponseDTO | null>;
  updateOrder(id: number, data: UpdateOrderDTO): Promise<OrderResponseDTO | null>;
  deleteOrder(id: number): Promise<void>;
}
