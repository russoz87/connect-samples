import {Request, Response} from 'express'
import {random} from 'faker'

/**
 * Verify orders.
 */
export const ordersVerify = (req: Request, res: Response): void => {
  type Request = {
    operation: string
    session_id: string
    sales_order_ids: string[]
  }

  const request: Request = req.body

  const data = request.sales_order_ids.map((sales_order_id) => {
    const succeeded = random.boolean()

    return {
      sales_order_id,
      succeeded,
      reason_for_failure: succeeded ? null : `Unable to process order id ${sales_order_id}`
    }
  })

  res.json(data)
}