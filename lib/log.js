/**
 * Logger interface
 */


import winston from 'winston';
import daily from 'winston-daily-rotate-file';
import moment from 'moment';
import path from 'path';
import op from 'object-path';
import config from '../config';


/**
 * setting up the log config
 */
const logdir = op.get(config, 'logdir', './_logs');
moment.locale(op.get(config, 'locale') || 'en');


/**
 * setting up the transports
 */
const transports = [

    new winston.transports.Console({
        timestamp: () => moment().format('L LTS'),
        colorize: true,
        level: 'debug'
    }),

    new (daily)({
        filename: path.join(logdir, '%DATE%.log'),
        timestamp: true,
        level: 'debug',
        json: false,
        prettyPrint: true,
        prepend: true,
        datePattern: 'YYYY-MM-DD'
    })

    // ...put extra transports here
];


export const log = new winston.Logger({transports});

export const stream = {
    write: (message, encoding) => log.info(message)
};
