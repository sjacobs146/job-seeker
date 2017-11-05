import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  newJob: {
    company: null,
    title: null,
    url: null,
    status: 'new',
    dateApplied: null,
    recruiterName: null,
    recruiterEmail: null,
    recruiterPhone: null,
    notes: null
  },

  actions: {
    submit () {
      this.sendAction('submit', this.get('newJob'));
      this.set('newJob.company', null)
      this.set('newJob.title', null)
      this.set('newJob.url', null)
    },

    reset () {
      this.set('newJob', {});
    },
  },
});
