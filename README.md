# mailchimp-api-3
Mailchimp api wrapper for v3 of the mailchimp api, with batch handling.

## install
```sh
npm i mailchimp-api-3
```
## use
```javascript
let Mailchimp = require('mailchimp-api-3');
let mailchimp = new Mailchimp('18fe4925038d265a19f1f3da80245adc-us13');
```

## Members
#### CREATE
```javascript
mailchimp.members.create(<list_id>, {
    email_address: <user_email>,
    merge_fields: {
       EMAIL: <user_email>,
       USERNAME: <user_name>
    },
    status: 'subscribed',
        ....
    })
    .then( user => {
        // result user
    })
    .catch( e => {
        // result e
    })
```
#### GET
```javascript
//get current user by email
mailchimp.members.get(<list_id>, <user_email>)
  .then( user => {
    // result user
  })
  .catch( e => {
    // result e
  })

//get all users from list
mailchimp.members.getAll(<list_id>)
  .then( user => {
    // result user
  })
  .catch( e => {
    // result e
  })
```
#### UPDATE
```javascript
let body = {
    merge_fields: {
        EMAIL: <user_email>,
    },
    interests: {<interests_id>: true}
    .....
};
mailchimp.members.update(<list_id>, <user_email>, body)
    .then( user => {
        // result user
    })
    .catch( e => {
        // result e
    })
```

## Lists

#### GET
```javascript
//get current list by list_id
mailchimp.members.get(<list_id>, <user_email>)
  .then( user => {
    // result user
  })
  .catch( e => {
    // result e
  })

//get all lists
mailchimp.members.getAll(<list_id>)
  .then( user => {
    // result user
  })
  .catch( e => {
    // result e
  })
```

### run

start prerender-node server for first-tab:
```javascript
$ npm start
```
