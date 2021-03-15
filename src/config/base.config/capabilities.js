module.exports = {
    mobile: [
        {
            browserName: 'chrome',
            maxInstances: 4,
            'goog:chromeOptions': {
                w3c: false,
                prefs: {
                    version: '73.0',
                    'profile.managed_default_content_settings.popups': 1,
                    'profile.managed_default_content_settings.notifications': 1,
                },
                args: [
                    'window-size=420,840',
                    'log-level=3',
                    'use-mobile-user-agent',
                    'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                    'headless'
                ],
            },
        },
    ],
    desktop: [
        {
            browserName: 'chrome',
            maxInstances: 4,
            'goog:chromeOptions': {
                w3c: false,
                prefs: {
                    version: '73.0',
                    'profile.managed_default_content_settings.popups': 1,
                    'profile.managed_default_content_settings.notifications': 1,
                },
                args: [
                    'window-size=1366,786',
                    'log-level=3',
                    'headless'
                ], //  https://gs.statcounter.com/screen-resolution-stats/desktop/worldwide
            },
        },
    ],
};
