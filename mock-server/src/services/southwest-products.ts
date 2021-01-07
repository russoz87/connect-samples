import {Router} from 'express';

export const southwestProductsRouter = Router();

/**
 * Verify orders.
 */
southwestProductsRouter.get('/verify/orders', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Retrieve sales orders, ordered by date.
 */
southwestProductsRouter.get('/sales/orders', (_, res) => {
  res.json({'bar': 'baz'});
});