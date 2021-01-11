export enum PaymentStatus {
  PaymentNeeded = 'payment_needed',
  Processing = 'processing',
  Paid = 'paid',
  FailedPayment = 'failed_payment',
  Cancelled = 'cancelled'
}

export enum PaymentMethod {
  Cash = 'cash',
  CC = 'cc',
  TransferFromBank = 'transfer_from_bank'
}

export type Payment = {
  status: string
  method: string
}