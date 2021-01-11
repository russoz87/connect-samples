import {Request, Response} from 'express'
import {random} from 'faker'

import {order} from '../../utils/order'
import {range} from '../../utils/range'

/**
 * Retrieve sales orders, ordered by date.
 */
export const ordersGet = (_: Request, res: Response): void => {
  const data = range(random.number(3)).map(order)

  res.json(data)
}