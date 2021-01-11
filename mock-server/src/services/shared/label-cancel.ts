import {Request, Response} from 'express'
import {random} from 'faker'

/**
 * Void labels.
 */
export const labelCancel = (req: Request, res: Response): void => {
  type Cancellation = {
    cancellationID: string
  }

  type Request = {
    cancellations: Cancellation[]
  }

  type Result = {
    id: string
    cancellationStatus: string
    cancellationCode: string
    cancellationDescription: string
    cancellationNote: string
    cancellationConfirmation: string
  }

  const request: Request = req.body;

  const cancel = (cancellation: Cancellation): Result => {
    if (random.boolean()) {
      return {
        id: cancellation.cancellationID,
        cancellationStatus: 'FAILED',
        cancellationCode: 'FA',
        cancellationDescription: 'Cancellation failed.',
        cancellationNote: 'Please call 1-800-555-5555 to cancel.',
        cancellationConfirmation: random.uuid()
      }
    }

    return {
      id: cancellation.cancellationID,
      cancellationStatus: 'COMPLETE',
      cancellationCode: 'AC',
      cancellationDescription: 'Cancellation is complete.',
      cancellationNote: '',
      cancellationConfirmation: random.uuid()
    }
  }

  const data = request.cancellations.map(cancel)

  res.json(data)
}