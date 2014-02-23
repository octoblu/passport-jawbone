var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


function Strategy(options, verify) {

}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;
