import {config} from "src/config/base.config/wdio.conf";
import {desktop} from "src/config/base.config/capabilities";

config.capabilities = desktop;
config.resolution = 'desktop';
config.specs = [
    './src/specs/test.spec.ts',
];

exports.config = config;
