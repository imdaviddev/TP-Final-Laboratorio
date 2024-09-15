import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { AppDataSource } from './config/typeorm.config'; // Ruta correcta

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1);
  }
};

startServer();

export default app;
