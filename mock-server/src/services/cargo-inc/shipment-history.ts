import {Request, Response} from 'express'
import {date, name, random} from 'faker'

import {range} from '../../utils/range'
import {event} from '../../utils/shipment'

/**
 * View location history of a shipment.
 */
export const shipmentHistory = (req: Request, res: Response): void => {
  type Request = {
    trackingNumber: string
  }

  const request: Request = req.body;

  const data = {
    trackingNumber: request.trackingNumber,
    deliveryDate: date.soon().toISOString(),
    packages: [
      {
        description: 'Large square box',
        length: random.number(5),
        width: random.number(5),
        height: random.number(5),
        dimUnit: 'in',
        weight: random.number(5),
        weightUnit: 'lb'
      }
    ],
    trackingEvents: range(random.number(3)).map(event),
    signedBy: {
      salutation: name.prefix(),
      firstName: name.firstName(),
      middleName: '',
      lastName: name.lastName(),
      suffix: '',
    },
    notes: [
      {
        type: 'message_to_buyer',
        text: 'This package was tracked successfully'
      }
    ]
  }

  res.json(data);
}