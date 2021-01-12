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

parcelPostRouter.get('/label/cancel', labelCancel)
parcelPostRouter.get('/label/create', labelCreate)
parcelPostRouter.get('/manifest/create', manifestCreate)
parcelPostRouter.get('/pickup/cancel', pickupCancel)
parcelPostRouter.get('/pickup/create', pickupCreate)
parcelPostRouter.get('/shipment/history', shipmentHistory)
parcelPostRouter.get('/shipment/rates', shipmentRates)