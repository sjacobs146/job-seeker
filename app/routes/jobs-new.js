import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createJob(job) {
      console.log('createJob')
      let newJob = this.get('store').createRecord('job', job)
      newJob.save()
      .then(() => this.transitionTo('jobs'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully created your job!');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem creating your job. Please try again.');
      })
    }
  }
});
