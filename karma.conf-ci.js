/*jslint node: true */
module.exports = function (config) {
    'use strict';

    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform : 'Linux',
            version: '37'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'Linux',
            version: '33'
        },
        sl_ie_11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8.1',
            version: '11'
        },
        sl_ie_10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8',
            version: '10'
        },
        sl_ie_9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '9'
        },
        sl_safari: {
            base: 'SauceLabs',
            browserName: 'safari',
            platform: 'OS X 10.9',
            version: '7'
        },
        sl_ios: {
            base: 'SauceLabs',
            browserName: 'iPad',
            platform: 'OS X 10.9',
            version: '8.0'
        },
        sl_android: {
            base: 'SauceLabs',
            browserName: 'android',
            platform: 'Linux',
            version: '4.4'
        }
    };

    config.set({

        basePath: '',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-cookies/angular-cookies.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap.js',
            'app/bower_components/underscore/underscore.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/js/app.js',
            'app/js/**/*.js',
            'test/client/**/*.js'
        ],

        sauceLabs: {
            testName: 'Juice-Shop Angular Unit Tests',
            tags: [process.env.TRAVIS_BRANCH],
            recordScreenshots: false
        },

        colors: true,
        singleRun: true,

        frameworks: ['jasmine'],

        browsers: Object.keys(customLaunchers),

        customLaunchers: customLaunchers,

        reporters: ['dots', 'saucelabs']

    });
};
