import {Request, Response} from 'express'
import {random} from 'faker'

/**
 * Void labels.
 */
export const labelCancel = (req: Request, res: Response): void => {
  type Cancellation = {
    id: string
  }

  type Request = {
    cancellations: Cancellation[]
  }

  type Result = {
    id: string
    status: string
    code: string
    description: string
    note: string
    confirmation: string
  }

  const request: Request = req.body;

  const cancel = (cancellation: Cancellation): Result => {
    if (random.boolean()) {
      return {
        id: cancellation.id,
        status: 'FAILED',
        code: 'FA',
        description: 'Cancellation failed.',
        note: 'Please call 1-800-555-5555 to cancel.',
        confirmation: random.uuid()
      }
    }

    return {
      id: cancellation.id,
      status: 'COMPLETE',
      code: 'AC',
      description: 'Cancellation is complete.',
      note: '',
      confirmation: random.uuid()
    }
  }

  const data = request.cancellations.map(cancel)

  res.json(data)
}