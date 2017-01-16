# mailchimp-api-3
Mailchimp api wrapper for v3 of the mailchimp api, with batch handling.

## install
```sh
npm i mailchimp-api-3
```
## use
```javascript
let Mailchimp = require('mailchimp-api-3');
let mailchimp = new Mailchimp(<api-key>);
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
//get user by email
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

#### REMOVE
```javascript
mailchimp.members.remove(<list_id>, <user_email>)
    .then( response => {
        // result response
    })
    .catch( e => {
        // result e
    })
```

## Lists

#### GET
```javascript
//get list by list_id
mailchimp.lists.get(<list_id>)
  .then( list => {
    // result list
  })
  .catch( e => {
    // result e
  })

//get all lists
mailchimp.lists.getAll()
  .then( lists => {
    // result lists
  })
  .catch( e => {
    // result e
  })
```

#### CREATE
```javascript
mailchimp.lists.create({
    name: <list_name>,
    contact: <contact>,
        ....
    })
    .then( list => {
        // result list
    })
    .catch( e => {
        // result e
    })
```
#### UPDATE
```javascript
let body = {
    name: <list_name>
    campaign_defaults: <campaign_defaults>
    .....
};
mailchimp.lists.update(<list_id>, body)
    .then( list => {
        // result lists
    })
    .catch( e => {
        // result e
    })
```

#### REMOVE
```javascript
mailchimp.lists.remove(<list_id>)
    .then( response => {
        // result response
    })
    .catch( e => {
        // result e
    })
```


## Interests

#### GET
```javascript
// Get information about a list’s interest categories
mailchimp.interests.getAll(<list_id>)
  .then( interests => {
    // result interests
  })
  .catch( e => {
    // result e
  })

//Get information about a specific interest category
mailchimp.interests.get(<list_id>, <interests_id>)
  .then( interest => {
    // result interest
  })
  .catch( e => {
    // result e
  })

```

#### UPDATE
```javascript
let body = {
    title: <interests_title>
    .....
};
mailchimp.interests.update(<list_id>, <interests_id>, body)
    .then( interest => {
        // result interest
    })
    .catch( e => {
        // result e
    })
```

#### REMOVE
```javascript
mailchimp.interests.remove(<list_id>, <interests_id>)
    .then( response => {
        // result response
    })
    .catch( e => {
        // result e
    })
```