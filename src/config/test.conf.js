const {config} = require('./base.config/env.conf');
const capabilities = require('./base.config/capabilities');

config.capabilities = capabilities.desktop;
config.resolution = 'desktop';
config.specs = [
    './src/specs/test.spec.ts',
];

exports.config = config;
