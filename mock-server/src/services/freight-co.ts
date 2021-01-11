import {Router} from 'express';

// SHARED
import {labelCancel} from './shared/label-cancel'
import {labelCreate} from './shared/label-create'
import {pickupCancel} from './shared/pickup-cancel'
import {pickupCreate} from './shared/pickup-create'

export const freightCoRouter = Router()

freightCoRouter.post('/label/cancel', labelCancel)
freightCoRouter.post('/label/create', labelCreate)
freightCoRouter.post('/pickup/create', pickupCancel)
freightCoRouter.post('/pickup/cancel', pickupCreate)
