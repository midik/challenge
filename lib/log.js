/**
 * Logger interface
 */


import winston from 'winston';
import moment from 'moment';
import op from 'object-path';
import config from '../config';


moment.locale(op.get(config, 'locale') || 'en');


const transports = [

    new winston.transports.Console({
        timestamp: () => moment().format('L LTS'),
        colorize: true,
        level: 'debug'
    })

    // ...put extra transports here
];


export default new winston.Logger({transports});
