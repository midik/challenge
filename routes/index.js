/**
 * Routes index
 */

import pricing from './pricing';


/**
 * grab routes to index
 */
export const init = (app) => [
    pricing(app)
    // ...
];
