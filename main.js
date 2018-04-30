import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import op from 'object-path';
import Ddos from 'ddos';
import config from './config';
import {log, stream} from './lib/log';
import * as routes from './routes';

const app = express();


/**
 * preparing the wall :)
 */
const ddosProtectionConfig = op.get(config, 'ddos', {burst:10, limit:15});
const ddos = new Ddos(ddosProtectionConfig);

/**
 * setting up the middleware
 */
app.use(ddos.express);
app.use(morgan('combined', {stream}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


log.info('Welcome to Pricing API!');
log.info(`Node ${process.version}`);


/**
 * async error handler
 */
const asyncErrorHandler = (fn) => (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise && routePromise.catch) {
        routePromise.catch(err => next(err));
    }
};


/**
* setting up the routing
*/
routes.init({app, asyncErrorHandler});


/**
 * main listener
 */
app.listen(op.get(config, 'port', 3000),
    undefined,
    undefined,
    () => log.info(`Express listening on port ${op.get(config, 'port')}`)
);
