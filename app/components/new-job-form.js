import Ember from 'ember';

export default Ember.Component.extend({
  newJob: {
    company: null,
    title: null,
    url: null,
    status: 'New',
    dateApplied: null,
    recruiterName: null,
    recruiterEmail: null,
    recruiterPhone: null,
    notes: null
  },
  init() {
      this._super(...arguments);
      this.set('newJob', {});
    },
  actions: {
    submit () {
      this.sendAction('submit', this.get('newJob'));
      this.set('newJob.company', null)
      this.set('newJob.title', null)
      this.set('newJob.url', null)
    },

    reset () {
      this.set('newJob', {})
      this.sendAction('reset')

    },
  },
});
