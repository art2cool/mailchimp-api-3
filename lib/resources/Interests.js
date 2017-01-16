class Interests {
  constructor(mailchimp) {
    this.mailchimp = mailchimp;
  }

  get(listId, interestsId) {
    let options = {
      method: 'get',
      path: `/lists/${listId}/interest-categories/${interestsId}`
    }
    return this.mailchimp._request(options)
  }

  getAll(listId) {
    let options = {
      method: 'get',
      path: `/lists/${listId}/interest-categories`
    }
    return this.mailchimp._request(options)
  }

  create(listId, body) {
    let options = {
      method: 'post',
      path: `/lists/${listId}/interest-categories`,
      body: body
    }
    return this.mailchimp._request(options)
  }

  update(listId, interestsId, body) {
    let options = {
      method: 'patch',
      path: `/lists/${listId}/interest-categories/${interestsId}`,
      body: body
    }
    return this.mailchimp._request(options)
  }

  remove(listId, interestsId) {
    let options = {
      method: 'delete',
      path: `/lists/${listId}/interest-categories/${interestsId}`
    }
    return this.mailchimp._request(options)
  }
}

module.exports = Interests;