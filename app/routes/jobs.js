import Ember from 'ember';

export default Ember.Route.extend({
  classNameBindings: ['table-responsive'],
  actions: {
    deleteJob(job) {
      job.destroyRecord()
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted your job!');
      })
      .catch(() => {
        this.get('flashMessages')
        .success('Error deleting your job!');
      })
    },
  },
  model () {
    return this.get('store').findAll('job');
  },
});
