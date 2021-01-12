import {Router} from 'express';

import {ordersGet} from './controllers/shared/orders-get'
import {ordersVerify} from './controllers/shared/orders-verify'

export const southwestProductsRouter = Router();

southwestProductsRouter.get('/orders', ordersGet);
southwestProductsRouter.post('/orders/verify', ordersVerify)