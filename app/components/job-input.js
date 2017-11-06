import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],

  statusList: [
    {value: 'New', text: 'New'},
    {value: 'Applied', text: 'Applied'},
    {value: 'In Progress', text: 'In Progress'},
    {value: 'No Response', text: 'No Response'},
    {value: 'Offer Made', text: 'Offer Made'},
    {value: 'Rejected', text: 'Rejected'},
  ]
});
