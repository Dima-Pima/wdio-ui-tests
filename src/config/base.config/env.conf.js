const {config} = require('./wdio.conf');

config.environment = 'integration';
config.baseUrl = `https://www.google.com`;

exports.config = config;
