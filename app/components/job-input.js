import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],

  statusList: [
    {value: 'new', text: 'New'},
    {value: 'applied', text: 'Applied'},
    {value: 'inprogress', text: 'In Progress'},
    {value: 'noresponse', text: 'No Response'},
    {value: 'offer', text: 'Offer Made'},
    {value: 'rejected', text: 'Rejected'},
  ]
});
