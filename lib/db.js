/**
 * database layer
 */

import mongoose from 'mongoose';
import op from 'object-path';
import config from '../config';
import {log} from './log';


/**
 * exposing the models
 */
export * from '../models';


/**
 * setting up the connection
 */
const db = mongoose.connection;
const dbConfig = op.get(config, 'db');
mongoose.connect(dbConfig);


/**
 * connection open handler
 */
db.once('open', () => log.info('Connected to mongo'));


/**
 * err handler
 * @todo throw
 */
db.on('error', (e) => log.error(e));
