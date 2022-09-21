const devLog = require('./dev-logger');
const prodLog = require('./prod-logger');

let logger = null;
if (process.env.NODE_ENV === 'production') {
    logger = prodLog();
} else {
    logger = devLog();
}
module.exports = logger;