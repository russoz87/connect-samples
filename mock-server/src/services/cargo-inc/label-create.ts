import {Request, Response} from 'express'
import {date, random} from 'faker'

/**
 * Create a label.
 */
export const labelCreate  = (req: Request, res: Response): void => {
  type Request = {
    ship_date: string
    total_weight: number
  }

  const request: Request = req.body;

  const data = {
    tracking_number: random.uuid(),
    delivery_date: date.soon(4, request.ship_date).toISOString(),
    shipment_cost: .97 * request.total_weight,
    confirmation_cost: 1.26,
    location_cost: .000012 * Math.floor(Math.random() * (10)) + 1,
    image_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }

  res.json(data);
}