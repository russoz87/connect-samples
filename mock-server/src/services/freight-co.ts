import {Router} from 'express';

// SHARED
import {labelCancel} from './shared/label-cancel'
import {pickupCancel} from './shared/pickup-cancel'
import {pickupCreate} from './shared/pickup-create'

// FREIGHT CO
import {labelCreate} from './freight-co/label-create'

export const freightCoRouter = Router()

freightCoRouter.post('/label/cancel', labelCancel)
freightCoRouter.post('/label/create', labelCreate)
freightCoRouter.post('/pickup/create', pickupCancel)
freightCoRouter.post('/pickup/cancel', pickupCreate)
