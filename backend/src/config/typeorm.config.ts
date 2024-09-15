import { DataSource } from 'typeorm';
import { Order } from '../models/order.models'; // Asegúrate de que la ruta sea correcta

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: [Order],
  synchronize: true,
  logging: false,
});
