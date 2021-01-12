import {Router} from 'express';

// SHARED
import {labelCancel} from './controllers/shared/label-cancel'
import {labelCreate} from './controllers/shared/label-create'
import {pickupCancel} from './controllers/shared/pickup-cancel'
import {pickupCreate} from './controllers/shared/pickup-create'
import {shipmentRates} from './controllers/shared/shipment-rates'

export const freightCoRouter = Router()

freightCoRouter.post('/label/cancel', labelCancel)
freightCoRouter.post('/label/create', labelCreate)
freightCoRouter.post('/pickup/create', pickupCancel)
freightCoRouter.post('/pickup/cancel', pickupCreate)
freightCoRouter.post('/shipment/rates', shipmentRates)