import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { AppDataSource } from './config/typeorm.config'; // Ruta correcta
import routes from './routes'; // Ruta correcta

dotenv.config();

const app = express();

// Configura el middleware de morgan para registrar las solicitudes HTTP
app.use(morgan('dev')); // 'dev' es un formato predefinido que muestra los detalles básicos de las solicitudes

app.use(cors());
app.use(bodyParser.json());

const startServer = async () => {
  try {
    // Inicializa la conexión a la base de datos
    await AppDataSource.initialize();
    console.log('Database connected successfully');

    // Usa las rutas definidas en routes/index.ts
    app.use('/', routes);

    // Arranca el servidor
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
