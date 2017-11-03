import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  newJob: {},
  actions: {
    updateJob () {
      const updatedJob = {
        id: this.get('job.id'),
        company: this.get('job.company'),
        title: this.get('job.title'),
        url: this.get('job.url'),
        status: this.get('job.status'),
        dateApplied: this.get('job.dateApplied'),
        recruiterName: this.get('job.recruiterName'),
        recruiterPhone: this.get('job.recruiterPhone'),
        recruiterEmail: this.get('job.recruiterEmail'),
        notes: this.get('job.notes'),
      }
      this.sendAction('updateJob', updatedJob)
    }
  }
});
