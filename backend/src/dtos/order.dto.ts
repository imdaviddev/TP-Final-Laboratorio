// DTO para crear un nuevo pedido
export interface CreateOrderDTO {
    customerId: number;
    product: string;
    amount: number;
  }
  
  // DTO para actualizar un pedido existente
  export interface UpdateOrderDTO {
    product?: string;
    amount?: number;
  }
  
  // DTO para la respuesta de un pedido
  export interface OrderResponseDTO {
    id: number;
    customerId: number;
    product: string;
    amount: number;
    createdAt: Date;
  }
  