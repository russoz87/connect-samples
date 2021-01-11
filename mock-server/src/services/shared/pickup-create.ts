import {Request, Response} from 'express';
import {random} from 'faker'

import {pickup} from '../../utils/pickup'

/**
 * Create a pick-up.
 */
export const pickupCreate = (req: Request, res: Response): void => {
  const DEFAULT_PICKUP_COST = 2;
  const DEFAULT_TAX_COST = 1;

  type Request = {
    date_time: string
    service_code: string
    total_weight: number
  }

  const request: Request = req.body;

  const data = {
    id: random.uuid(),
    date_time: pickup[request.service_code]().toISOString(),
    pickup_cost: .15 * request.total_weight || DEFAULT_PICKUP_COST,
    tax_cost: .03 * request.total_weight || DEFAULT_TAX_COST,
    location_cost: .000012 * Math.floor(Math.random() * 10) + 1
  }

  res.json(data)
}