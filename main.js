import express from 'express';
import logger from 'morgan';
import op from 'object-path';
import Ddos from 'ddos';
import config from './config';
import log from './lib/log';
import routes from './routes/pricing';


const app = express();


/**
 * building the wall :)
 */
const ddosProtectionConfig = op.get(config, 'ddos', {burst:10, limit:15});
const ddos = new Ddos(ddosProtectionConfig);


log.info('Welcome to Pricing API!');
log.debug(`Node ${process.version}`);


/**
 * setting up the middleware
 */
app.use(ddos.express);
app.use(logger('dev'));
app.use(express.json());


/**
 * setting up the routes
 */
app.use('/', routes);


/**
 * async error handler
 */
// const asyncErrorHandler = (fn) => (req, res, next) => {
//     const routePromise = fn(req, res, next);
//     if (routePromise && routePromise.catch) {
//         routePromise.catch(err => next(err));
//     }
// };


/**
 * main listener
 */
app.listen(op.get(config, 'port', 3000),
    undefined,
    undefined,
    async () => {
        log.info(`Pricing API is listening on port ${op.get(config, 'port')}`);
    }
);