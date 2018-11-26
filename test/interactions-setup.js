const path = require('path');
const Promise = require('bluebird'); // eslint-disable-line

const port = process.env.PACT_PORT || 8989;

// const provider = Pact({
//     host: 'localhost',
//     port,
//     log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
//     dir: path.resolve(process.cwd(), 'pacts'),
//     cors: true,
//     consumer: 'Anonymous',
//     provider: 'payment-service',
// });

// Expose a function for adding interactions
// Example: beforeAll(() => addInteractions(payment, logins, ...))
// global.addInteractions = (...interactions) => Promise.mapSeries(
//     [].concat(...interactions),
//     interaction => provider.addInteraction(interaction),
// );

// global.provider = provider;
