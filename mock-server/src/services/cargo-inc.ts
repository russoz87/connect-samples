import {Router} from 'express';

// SHARED
import {labelCancel} from './shared/label-cancel'
import {pickupCancel} from './shared/pickup-cancel'
import {pickupCreate} from './shared/pickup-create'
import {shipmentHistory} from './shared/shipment-history'
import {shipmentRates} from './shared/shipment-rates'

// CARGO INC
import {eodCreate} from './cargo-inc/eod-create'
import {labelCreate} from './cargo-inc/label-create'

export const cargoIncRouter = Router()

cargoIncRouter.post('/eod/create', eodCreate)
cargoIncRouter.get('/label/cancel', labelCancel)
cargoIncRouter.post('/label/create', labelCreate)
cargoIncRouter.get('/pickup/cancel', pickupCancel)
cargoIncRouter.post('/pickup/create', pickupCreate)
cargoIncRouter.get('/shipment/history', shipmentHistory)
cargoIncRouter.get('/shipment/rates', shipmentRates)
