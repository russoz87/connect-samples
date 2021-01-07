import {Router} from 'express';

export const iBuyRouter = Router();

/**
 * Retrieve sales orders, ordered by date.
 */
iBuyRouter.get('/orders', (_, res) => {
  res.json({'bar': 'baz'});
});

/**
 * Verify orders.
 */
iBuyRouter.post('/orders/verify', (_, res) => {
  res.json({'foo': 'bar'});
});
