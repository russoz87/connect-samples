import {Router} from 'express';

export const cargoIncRouter = Router();

/**
 * Create an EOD.
 */
cargoIncRouter.get('/eod/create', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Create a label.
 */
cargoIncRouter.get('/labels/create', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * View location history of a shipment.
 */
cargoIncRouter.get('/shipments/history', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Create a pick-up.
 */
cargoIncRouter.get('/pickups/create', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Cancel a pick-up.
 */
cargoIncRouter.get('/pickups/cancel', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Get rates for a shipment.
 */
cargoIncRouter.get('/rates', (_, res) => {
  res.json({'foo': 'bar'});
});

/**
 * Void labels.
 */
cargoIncRouter.get('/labels/cancel', (_, res) => {
  res.json({'foo': 'bar'});
});
