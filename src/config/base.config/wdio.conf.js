exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './src/specs/**/*.spec.ts'
    ],
    services: ['chromedriver'],
    maxInstances: 4,
    retries: 2,
    logLevel: 'error',
    bail: 0,
    mock: false,
    waitforTimeout: 60 * 1000,
    waitforInterval: 500,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    pipeline: false,
    featureFlags: {
        specFiltering: true
    },
    framework: 'mocha',
    reporters: [
        'spec'
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 0,
        require: ['tsconfig-paths/register']
    },

    /* HOOKS */
    async onPrepare(config) {
    },

    beforeSession: function () {
        require('ts-node').register({files: true});
    },

    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
    }
};
