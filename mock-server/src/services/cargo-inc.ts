import {Router} from 'express';

// SHARED
import {labelCancel} from './shared/label-cancel'
import {pickupCancel} from './shared/pickup-cancel'
import {pickupCreate} from './shared/pickup-create'

// CARGO INC
import {eodCreate} from './cargo-inc/eod-create'

import {labelCreate} from './cargo-inc/label-create'
import {shipmentHistory} from './cargo-inc/shipment-history'
import {shipmentRates} from './cargo-inc/shipment-rates'

export const cargoIncRouter = Router();

cargoIncRouter.get('/eod/create', eodCreate);
cargoIncRouter.get('/label/cancel', labelCancel)
cargoIncRouter.get('/label/create', labelCreate);
cargoIncRouter.get('/pickup/cancel', pickupCancel);
cargoIncRouter.get('/pickup/create', pickupCreate);
cargoIncRouter.get('/shipment/history', shipmentHistory);
cargoIncRouter.get('/shipment/rates', shipmentRates)
