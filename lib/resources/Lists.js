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

}

module.exports = Lists;
