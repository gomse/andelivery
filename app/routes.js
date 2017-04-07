import { Router } from 'express';

import MetaController from './controllers/meta.controller';
import OrdersController from './controllers/orders.controller';

import errorHandler from './middlewares/error.handler';

const routes = new Router();

routes.get('/', MetaController.index);
routes.get(/\/(.*).template$/, MetaController.template);

routes.get('/orders', OrdersController.list);
routes.post('/orders', OrdersController.add);

routes.use(errorHandler);

export default routes;
