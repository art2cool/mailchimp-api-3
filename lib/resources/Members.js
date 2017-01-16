'use strict';

const md5 = require('md5');

class Members {
  constructor(mailchimp) {
    this.mailchimp = mailchimp
  }

  getAll(listId) {
    let options = {
      method: 'get',
      path: `/lists/${listId}/members`
    }
    return this.mailchimp._request(options)
  }

  get(listId, email) {
    let options = {
      method: 'get',
      path: `/lists/${listId}/members/${md5(email)}`
    }
    return this.mailchimp._request(options)
  }

  update(listId, email, body) {
    let options = {
      method: 'put',
      path: `/lists/${listId}/members/${md5(email)}`,
      body: body
    }
    return this.mailchimp._request(options)
  }

  create(listId, body) {
    let options = {
      method: 'post',
      path: `/lists/${listId}/members`,
      body: body
    }
    return this.mailchimp._request(options)
  }

  remove(listId, email) {
    let options = {
      method: 'delete',
      path: `/lists/${listId}/members/${md5(email)}`
    }
    return this.mailchimp._request(options)
  }
}

module.exports = Members;