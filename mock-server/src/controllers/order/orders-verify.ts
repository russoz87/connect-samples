import {Request, Response} from 'express'
import {random} from 'faker'

// TYPES
type RequestBody = {
  operation: string
  session_id: string
  sales_order_ids: string[]
}

/**
 * Verify orders.
 */
export const ordersVerify = (req: Request, res: Response): void => {
  const body: RequestBody = req.body

  const data = body.sales_order_ids.map((sales_order_id) => {
    const succeeded = random.boolean()

    return {
      sales_order_id,
      succeeded,
      reason_for_failure: succeeded ? null : `Unable to process order id ${sales_order_id}`
    }
  })

  res.json(data)
}