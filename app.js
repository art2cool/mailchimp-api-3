const Mailchimp = require('./lib');

const groops = {
  free: 'd4861bf294',
  active: '31775a7038',
  inactive: '8e99de4257'
};

let mailchimp = new Mailchimp('18fe4925038d265a19f1f3da80245adc-us13');

mailchimp.members.get('a65f283cc7', 'roliquetest13@gmail.com')
  .then( user => {
    console.dir(user);
  })
  .catch( e => {
    console.log(e);
  })
mailchimp.members.update('a65f283cc7', 'ba112roliquetest13@gmail.com', {
  merge_fields: {
    EMAIL: 'vladba112roliquetest13@gmail.com'
  },
  merge_fields: {
    USERNAME: 'bbbbbb' + new Date(),
    groupings: [{
        name: 'Subscription type',
        groups: 'free'
    }]
  }
});
// mailchimp.members.get('a65f283cc7', 'roliquetest13@gmail.com');
//mailchimp.members.getAll('a65f283cc7');

mailchimp.members.create('a65f283cc7', {
          email_address: 'ba112roliquetest13@gmail.com',
           merge_fields: {
               EMAIL: 'ba112roliquetest13@gmail.com',
               USERNAME: '11useUsername'
          },
          status: 'subscribed',
          interests: {'31775a7038': true},
           double_optin: false,
           update_existing: true,
           send_welcome: false

});

// console.log(mailchimp.lists);
// mailchimp.lists.get('a65f283cc7');
