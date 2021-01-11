import {address, company, random} from 'faker'

import {Address} from './address'

export const Status = [
  ['NY', 'NOT YET IN SYSTEM'],
  ['C', 'COMPLETE'],
  ['IT', 'IN TRANSIT']
]

type TrackingEvent = {
  description: string
  date: string
  status: string
  errors: string[]
  statusCode: string
  latitude: number
  longitude: number
  addressType: string
  address: Address
}

export const event = (): TrackingEvent => {
  const status = random.arrayElement(Status)

  return {
    description: 'Received at facility,',
    date: new Date().toISOString(),
    status: status[1],
    errors: <string[]>[],
    statusCode: status[0],
    address: {
      business_name: company.companyName(),
      lines: [`${address.streetAddress()} ${address.streetName()} ${address.streetSuffix()}`],
      city: address.city(),
      state: address.state(),
      postal_code: address.zipCode(),
      country: 'US',
      time_zone: address.timeZone()
    },
    addressType: 'residential',
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
  }
}