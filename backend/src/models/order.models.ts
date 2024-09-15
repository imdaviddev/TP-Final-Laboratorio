import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Define la entidad 'Order'
@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  product: string;

  @Column('decimal')
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Método de instancia para obtener un resumen del pedido
  getOrderSummary(): string {
    return `Order ${this.id} for customer ${this.customerId} is ${this.amount} ${this.product}`;
  }
}
