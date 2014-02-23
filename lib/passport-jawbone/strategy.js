var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://jawbone.com/auth/oauth2/auth';
  options.tokenURL = options.tokenURL || 'https://jawbone.com/auth/oauth2/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-jawbone';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'jawbone';
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;
