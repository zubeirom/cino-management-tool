'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'cino-management-tool',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-load': {
      // This is the default value, if you don't set this option
      loadingIndicatorClass: 'ember-load-indicator'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'http://localhost:3000.com/api/token',
      routeAfterAuthentication: 'index'
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.host = 'https://api-stayontrack.herokuapp.com'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'https://api-stayontrack.herokuapp.com/api/token',
      routeAfterAuthentication: 'index'
    };
    // here you can enable a production-specific feature
  }

  return ENV;
};
