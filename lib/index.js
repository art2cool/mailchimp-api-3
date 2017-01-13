'use strict';

const request = require('request');
const Lists = require('./resources/Lists');
const Members = require('./resources/Members');

class Mailchimp {

  constructor(apiKey) {
    const apiKeyRegex = /.+\-.+/;

    if (!apiKeyRegex.test(apiKey)) {
      throw new Error('missing or invalid api key: ' + apiKey)
    }

    this.__apiKey = apiKey;
    this.__baseUrl = "https://" + this.__apiKey.split('-')[1] + ".api.mailchimp.com/3.0";
    this.lists = new Lists(this);
    this.members = new Members(this);
  }

  _request(options, done) {
    let { path, method, body, params, query } = options;
    let deferred = Promise.defer();

    let obj = {
      method: method,
      url: this.__baseUrl + path,
      auth: {
        user: 'any',
        password: this.__apiKey
      },
      json: body,
      qs: query,
      headers: {
        'User-Agent': 'mailchimp-api-3 : https://github.com/art2cool/mailchimp-api-3'
      }
    }
    request(obj, function(err, response) {
      if (err) {
          deferred.reject(err);
          return;
      }
      deferred.resolve(response.body);
    })

    return deferred.promise;
  }
}

module.exports = Mailchimp;
