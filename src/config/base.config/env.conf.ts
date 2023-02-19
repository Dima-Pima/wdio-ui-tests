import {config} from './wdio.conf';

config.environment = 'test';
config.baseUrl = `https://www.google.com`;

exports.config = config;
