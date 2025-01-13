const logger = require('../config/log.config');


function logMessage(type, message) {
  const env = process.env.ENVIROMENT || 'developer';

  if (env === 'developer') {
    console[type](message);
  } else if (env === 'production') {
    if (type === 'log') {
      logger.info(message);
    } else if (type === 'error') {
      logger.error(message);
    }
  }
}

module.exports = logMessage;
