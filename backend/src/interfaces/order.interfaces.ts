import { CreateOrderDTO, UpdateOrderDTO, OrderResponseDTO } from '../dtos/order.dto';

export interface IOrderService {
  createOrder(data: CreateOrderDTO): Promise<OrderResponseDTO>;
  getOrderById(id: number): Promise<OrderResponseDTO | null>;
  updateOrder(id: number, data: UpdateOrderDTO): Promise<OrderResponseDTO | null>;
  deleteOrder(id: number): Promise<void>;
}
