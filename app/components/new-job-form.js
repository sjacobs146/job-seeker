import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  newJob: {
    company: null,
    title: null,
    url: null,
    status: null,
    dateApplied: null,
    recruiterName: null,
    recruiterEmail: null,
    recruiterPhone: null,
    notes: null
  },

  actions: {
    submit () {
      console.log('submit')
      this.sendAction('submit', this.get('newJob'));
      this.set('newJob.company', null)
      this.set('newJob.title', null)
      this.set('newJob.url', null)
    },

    reset () {
      console.log('cancel')
      this.set('newJob', {});
    },
  },
});
