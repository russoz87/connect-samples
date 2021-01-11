import {Router} from 'express';

import {ordersGet} from './i-buy/orders-get'
import {ordersVerify} from './i-buy/orders-verify'

export const iBuyRouter = Router();

iBuyRouter.get('/orders', ordersGet);
iBuyRouter.get('/orders/verify', ordersVerify)