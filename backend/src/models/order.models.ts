import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  customerId: number = 0;

  @Column()
  product: string = '';

  @Column()
  amount: number = 0;

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();

  getOrderSummary(): string {
    return `Order ${this.id} for customer ${this.customerId} is ${this.amount} ${this.product}`;
  }

  constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}

