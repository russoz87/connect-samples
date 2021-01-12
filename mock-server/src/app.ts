import express from 'express'

// AUTH
import {authRouter} from './routers/auth'

// SERVICES
import {cargoIncRouter} from './routers/cargo-inc'
import {freightCoRouter} from './routers/freight-co'
import {iBuyRouter} from './routers/i-buy'
import {parcelPostRouter} from './routers/parcel-post'
import {southwestProductsRouter} from './routers/southwest-products'

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
