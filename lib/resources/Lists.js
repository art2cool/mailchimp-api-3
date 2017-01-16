'use strict';

class Lists {
  constructor(mailchimp) {
    this.mailchimp = mailchimp;
  }

  getAll() {
    let options = {
      method: 'get',
      path: '/lists'
    }
    return this.mailchimp._request(options)
  }

  get(listId) {
    let options = {
      method: 'get',
      path: `/lists/${listId}`
    }
    return this.mailchimp._request(options)
  }

  update(listId, body){
    let options = {
      method: 'patch',
      path: `/lists/${listId}`,
      body: body
    }
    return this.mailchimp._request(options)
  }

  remove(listId) {
    let options = {
      method: 'delete',
      path: `/lists/${listId}`
    }
    return this.mailchimp._request(options)
  }

  create(body) {
    let options = {
      method: 'post',
      path: `/lists`,
      body: body
    }
    return this.mailchimp._request(options)
  }
}

module.exports = Lists;