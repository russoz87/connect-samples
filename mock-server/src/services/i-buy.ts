import {Router} from 'express';

import {ordersGet} from './shared/orders-get'
import {ordersVerify} from './shared/orders-verify'

export const iBuyRouter = Router();

iBuyRouter.get('/orders', ordersGet);
iBuyRouter.get('/orders/verify', ordersVerify)