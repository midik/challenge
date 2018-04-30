/**
 * Routes index
 */

import pricing from './pricing';


/**
 * grab routes to index
 *
 * @param args.app {Object} - Express instance
 * @param args.asyncErrorHandler {Function}
 */
export const init = (args) => [
    pricing(args)
    // ...
];
