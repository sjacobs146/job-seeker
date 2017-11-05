import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('job', params.job_id)
  },
  actions: {
    updateJob (job) {
      // const flashMessages = Ember.get(this, 'flashMessages');
      let newJob = this.get('store').findRecord('job', job.id)
        .then(function (data) {
          data.set('company', job.company)
          data.set('title', job.title)
          data.set('url', job.url)
          data.set('status', job.status)
          data.set('dateApplied', job.dateApplied)
          data.set('recruiterName', job.recruiterName)
          data.set('recruiterEmail', job.recruiterEmail)
          data.set('recruiterPhone', job.recruiterPhone)
          data.set('notes', job.notes)
          return data.save()
        })
        .then(() => {
          this.get('flashMessages').success('Successfully updated your job!')
        })
        .then(() => this.transitionTo('job', job))
        .catch(() => {
          this.get('flashMessages').danger('Error updating your job!')
        })
    },
    cancel (job) {
      this.transitionTo('job', job)
    }
  }
});
