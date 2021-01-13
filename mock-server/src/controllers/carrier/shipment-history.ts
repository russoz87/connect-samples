import {Request, Response} from 'express'
import {address, company, date, name, random} from 'faker'

import {range} from '../../utils/fp'
import {Address} from '../../utils/types'

// CONSTANTS
const Status = [
  ['NY', 'NOT YET IN SYSTEM'],
  ['C', 'COMPLETE'],
  ['IT', 'IN TRANSIT']
]

// TYPES
type TrackingEvent = {
  description: string
  date: string
  status: string
  status_code: string
  errors: string[]
  latitude: number
  longitude: number
  address: Address
}

type RequestBody = {
  tracking_number: string
}

// HELPER FUNCTIONS
export const event = (): TrackingEvent => {
  const status = random.arrayElement(Status)

  return {
    description: status[1].toLocaleLowerCase(),
    date: new Date().toISOString(),
    status: status[1],
    status_code: status[0],
    errors: <string[]>[],
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    address: {
      business_name: company.companyName(),
      lines: [`${address.streetAddress()} ${address.streetName()} ${address.streetSuffix()}`],
      city: address.city(),
      state: address.state(),
      postal_code: address.zipCode(),
      country: 'US',
      time_zone: address.timeZone(),
      type: 'residential'
    }
  }
}

/**
 * View location history of a shipment.
 */
export const shipmentHistory = (req: Request, res: Response): void => {
  const body: RequestBody = req.body;

  const data = {
    trackingNumber: body.tracking_number,
    deliveryDate: date.soon().toISOString(),
    packages: [
      {
        description: 'Large square box',
        length: random.number(5),
        width: random.number(5),
        height: random.number(5),
        dimUnit: 'in',
        weight: random.number(5),
        weight_unit: 'lb'
      }
    ],
    trackingEvents: range(random.number(3)).map(event),
    signedBy: {
      salutation: name.prefix(),
      first_name: name.firstName(),
      middle_name: '',
      last_name: name.lastName(),
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