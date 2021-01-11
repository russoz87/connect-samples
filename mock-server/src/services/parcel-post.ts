import {Router} from 'express';

// SHARED
import {labelCancel} from './shared/label-cancel'
import {labelCreate} from './shared/label-create'
import {pickupCancel} from './shared/pickup-cancel'
import {pickupCreate} from './shared/pickup-create'
import {shipmentHistory} from './shared/shipment-history'

// PARCEL POST
import {manifestCreate} from './parcel-post/manifest-create'

export const parcelPostRouter = Router()

parcelPostRouter.get('/label/cancel', labelCancel)
parcelPostRouter.get('/label/create', labelCreate)
parcelPostRouter.get('/manifest/create', manifestCreate)
parcelPostRouter.get('/pickup/cancel', pickupCancel)
parcelPostRouter.get('/pickup/create', pickupCreate)
parcelPostRouter.get('/shipment/history', shipmentHistory)