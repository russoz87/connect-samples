import {Router} from 'express';

import {ordersGet} from './shared/orders-get'
import {ordersVerify} from './shared/orders-verify'

export const southwestProductsRouter = Router();

southwestProductsRouter.get('/orders', ordersGet);
southwestProductsRouter.get('/orders/verify', ordersVerify)