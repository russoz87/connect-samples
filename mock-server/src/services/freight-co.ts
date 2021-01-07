import {Router} from 'express';

export const freightCoRouter = Router();

/**
 * Generate a label.
 */
freightCoRouter.post('/label/generate', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Schedule a pick-up.
 */
freightCoRouter.post('/pick-up', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Cancel a pick-up.
 */
freightCoRouter.delete('/pick-up/:id', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Get rates for a shipment.
 */
freightCoRouter.post('/rates/shipment', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Generate an EOD.
 */
freightCoRouter.get('/eod/generate', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Generate an EOD.
 */
freightCoRouter.get('/shipments/rates', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Void labels.
 */
freightCoRouter.post('/labels/cancel', (_, res) => {
  res.json({'foo': 'bar'});
});
