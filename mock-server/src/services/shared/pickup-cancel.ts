import {Request, Response} from 'express'
import {random} from 'faker'

/**
 * Cancel a pick-up.
 */
export const pickupCancel = (req: Request, res: Response): void => {
  type PickUp = {
    pick_up_id: string
    service_code: string
  }

  type Request = {
    scheduled_pickups: PickUp[]
  }

  type Success = {
    id: string
  }

  type Failure = {
    id: string
    error: boolean
    reason: string
  }

  const check = (pickup: PickUp): Success | Failure => {    
    if (random.boolean()) {
      return {id: pickup.pick_up_id}
    }

    return {
      id: pickup.pick_up_id,
      error: true,
      reason: `${pickup.service_code} must be cancelled by phone. Please call 1-800-555-5555`
    }
  }

  const request: Request = req.body;

  const data = request.scheduled_pickups.map(check)

  res.json(data)
}