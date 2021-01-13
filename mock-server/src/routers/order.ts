import {Router} from 'express'

import {ordersGet} from '../controllers/order/orders-get'
import {ordersVerify} from '../controllers/order/orders-verify'

export const orderRouter = Router()

orderRouter.get('/orders/get', ordersGet)
orderRouter.post('/orders/verify', ordersVerify)