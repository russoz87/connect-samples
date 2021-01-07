import express from 'express';

import {authRouter} from './services/auth';
import {cargoIncRouter} from './services/cargo-inc';
import {freightCoRouter} from './services/freight-co';
import {iBuyRouter} from './services/i-buy';
import {parcelPostRouter} from './services/parcel-post';
import {southwestProductsRouter} from './services/southwest-products';

const app = express().use(express.json());

app.use('/auth', authRouter);
app.use('/cargo-inc', cargoIncRouter);
app.use('/freight-co', freightCoRouter);
app.use('/i-buy', iBuyRouter);
app.use('/parcel-post', parcelPostRouter);
app.use('/southwest-products', southwestProductsRouter);

app.listen(9999);
