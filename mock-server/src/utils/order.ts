import {address, commerce, company, date, lorem, name, random} from 'faker'

import {Address} from './address'
import {Payment, PaymentMethod, PaymentStatus} from './payment'
import {enumeration} from './random'
import {range} from './range'

enum OrderStatus {
  PaymentNeeded = 'payment_needed',
  InTransit = 'in_transit',
  OnHold = 'on_hold',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

type Buyer = {
  id: string
  name: string
}

type ShippingInfo = {
  confirmation_type: string
  delivery_date: string
}

type ShippingItem = {
  id: string
  name: string
  quantity: number
  price_per_unit: number
  product_id: string
}

type Order = {
  id: string
  created_at: string
  status: string
  seller_id: string
  shipping_notes: string
  buyer: Buyer
  payment: Payment
  address: Address
  shipping_info: ShippingInfo
  shipping_items: ShippingItem[]
}

const item = (): ShippingItem => {
  return {
    id: random.uuid(),
    name: commerce.productName(),
    quantity: random.number(10),
    price_per_unit: random.number(10),
    product_id: random.uuid()
  }
}

export const order = (): Order => {
  return {
    id: random.uuid(),
    created_at: date.recent().toISOString(),
    status: enumeration(OrderStatus),
    seller_id: random.uuid(),
    shipping_notes: lorem.words(4),
    buyer: {
      id: random.uuid(),
      name: `${name.firstName()} ${name.lastName()}`
    },
    payment: {
      status: enumeration(PaymentStatus),
      method: enumeration(PaymentMethod)
    },
    address: {
      business_name: company.companyName(),
      lines: [`${address.streetAddress()} ${address.streetName()} ${address.streetSuffix()}`],
      city: address.city(),
      state: address.stateAbbr(),
      postal_code: address.zipCode(),
      country: 'US',
      time_zone: address.timeZone()
    },
    shipping_info: {
      confirmation_type: 'signature',
      delivery_date: date.soon(1).toISOString()
    },
    shipping_items: range(random.number(3)).map(item)
  }
}