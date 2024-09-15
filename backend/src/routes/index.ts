import { Router } from 'express';
import orderRoutes from './order.routes'; // Asegúrate de que la ruta sea correcta

const router = Router();

router.use('/', orderRoutes);

export default router;
