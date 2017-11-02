import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('jobs');
  this.route('jobs-new', {path: 'jobs/new'});
  this.route('jobs-edit', {path: 'jobs/:job_id/edit'});
});

export default Router;
