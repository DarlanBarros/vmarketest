import { Router } from 'express';
import providersRouter from './providers.routes';
import productsRouter from './products.routes';

const routes = Router();

routes.use('/providers', providersRouter);
routes.use('/products', productsRouter);

export default routes;
