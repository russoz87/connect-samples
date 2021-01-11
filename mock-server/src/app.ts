import express from 'express'

// AUTH
import {authRouter} from './auth'

// SERVICES
import {cargoIncRouter} from './services/cargo-inc'
import {freightCoRouter} from './services/freight-co'
import {iBuyRouter} from './services/i-buy'
import {parcelPostRouter} from './services/parcel-post'
import {southwestProductsRouter} from './services/southwest-products'

const app = express().use(express.json())

// AUTH
app.use('/auth', authRouter)

// SERVICES
app.use('/cargo-inc', cargoIncRouter)
app.use('/freight-co', freightCoRouter)
app.use('/i-buy', iBuyRouter)
app.use('/parcel-post', parcelPostRouter)
app.use('/southwest-products', southwestProductsRouter)

app.listen(process.env.PORT);
