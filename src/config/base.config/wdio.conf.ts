import {register} from "ts-node";

export const config: WebdriverIOConfig  = {
    runner: 'local',
    path: '/',
    specs: [
        './src/specs/**/*.spec.ts'
    ],
    services: ['chromedriver'],
    maxInstances: 4,
    specFileRetries: 2,
    logLevel: 'error',
    capabilities: [],
    bail: 0,
    waitforTimeout: 60 * 1000,
    waitforInterval: 500,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec'
    ],
    mock: false,
    resolution: 'desktop',
    environment: 'test',
    mochaOpts: {
        ui: 'bdd',
        timeout: 0,
        require: ['tsconfig-paths/register']
    },

    /* HOOKS */
    onPrepare: function () {
        //TODO
    },

    beforeSession: function () {
        register({files: true});
    },

    afterTest: function () {
        //TODO
    },
};


interface WebdriverIOConfig extends WebdriverIO.Config {
    mock: boolean;
    resolution: 'desktop'|'mobile';
    environment: string;
}
