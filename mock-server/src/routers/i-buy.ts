import {Router} from 'express';

import {ordersGet} from './controllers/shared/orders-get'
import {ordersVerify} from './controllers/shared/orders-verify'

export const iBuyRouter = Router();

iBuyRouter.get('/orders', ordersGet);
iBuyRouter.post('/orders/verify', ordersVerify)