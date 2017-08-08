'use strict';

const request = require('request');
const Lists = require('./resources/Lists');
const Members = require('./resources/Members');
const Interests = require('./resources/Interests');

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
    this.interests = new Interests(this);
  }

  _request(options, done) {
    let { path, method, body, params, query } = options;

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
    return new Promise((resolve, reject) => {
      request(obj, (err, response) => {
        if (err) {
            return reject(err);
        }
        if (response.body.type && response.body.type.indexOf("error") != -1) {
            return reject(response.body);
        }
        resolve(response.body);
      })
    });
  }
}

module.exports = Mailchimp;
