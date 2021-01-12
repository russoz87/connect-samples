import {Router} from 'express';

// SHARED
import {labelCancel} from './controllers/shared/label-cancel'
import {labelCreate} from './controllers/shared/label-create'
import {pickupCancel} from './controllers/shared/pickup-cancel'
import {pickupCreate} from './controllers/shared/pickup-create'
import {shipmentHistory} from './controllers/shared/shipment-history'
import {shipmentRates} from './controllers/shared/shipment-rates'

// PARCEL POST
import {manifestCreate} from './controllers/parcel-post/manifest-create'

export const parcelPostRouter = Router()

parcelPostRouter.post('/label/cancel', labelCancel)
parcelPostRouter.post('/label/create', labelCreate)
parcelPostRouter.post('/manifest/create', manifestCreate)
parcelPostRouter.post('/pickup/cancel', pickupCancel)
parcelPostRouter.post('/pickup/create', pickupCreate)
parcelPostRouter.post('/shipment/history', shipmentHistory)
parcelPostRouter.post('/shipment/rates', shipmentRates)