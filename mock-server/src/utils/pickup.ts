import {date} from 'faker'

const flexpik = (): Date => {
  return date.soon(2)
}

const nextday = (): Date => {
  return date.soon(1)
}

const sameday = (): Date => {
  return date.soon()
}

export const pickup: { [key: string]: () => Date } = {
  "FLEXPIK": flexpik,
  "NEXTDAY": nextday,
  "SAMEDAY": sameday
}