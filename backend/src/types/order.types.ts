// src/types/order.types.ts

// Tipo para representar el estado del pedido
export type OrderStatus = 'pending' | 'completed' | 'shipped' | 'cancelled';

// Interfaz para el objeto de pedido en la aplicación
export interface Order {
  id: number;
  customerId: number;
  product: string;
  amount: number;
  createdAt: Date;
  status: OrderStatus;
}

// Interfaz para la respuesta de una API relacionada con pedidos
export interface OrderResponse {
  order: Order;
  message: string;
}
