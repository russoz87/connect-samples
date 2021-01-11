import {Request, Response} from 'express'
import {random} from 'faker'

/**
 * Create an EOD.
 */
export const eodCreate = (_: Request, res: Response): void => {
  const data = [
    {tracking_number: random.uuid()},
    {tracking_number: random.uuid()}
  ]

  res.json(data);
}