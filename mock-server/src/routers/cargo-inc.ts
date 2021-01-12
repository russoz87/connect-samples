import {Router} from 'express';

// SHARED
import {labelCancel} from './controllers/shared/label-cancel'
import {pickupCancel} from './controllers/shared/pickup-cancel'
import {pickupCreate} from './controllers/shared/pickup-create'
import {shipmentHistory} from './controllers/shared/shipment-history'
import {shipmentRates} from './controllers/shared/shipment-rates'

// CARGO INC
import {eodCreate} from './controllers/cargo-inc/eod-create'
import {labelCreate} from './controllers/cargo-inc/label-create'

export const cargoIncRouter = Router()

cargoIncRouter.post('/eod/create', eodCreate)
cargoIncRouter.post('/label/cancel', labelCancel)
cargoIncRouter.post('/label/create', labelCreate)
cargoIncRouter.post('/pickup/cancel', pickupCancel)
cargoIncRouter.post('/pickup/create', pickupCreate)
cargoIncRouter.post('/shipment/history', shipmentHistory)
cargoIncRouter.post('/shipment/rates', shipmentRates)
