import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  // Projects
  this.resource('projects', function() {
    this.route('new');

    // Creation + edition steps
    this.resource('steps', function() {
      this.route('description');
      this.route('participants');
      this.route('last');
    });
  });

  // Posts
  this.resource('posts', function () {
    this.route('show', { path: ':post_id/show'});
  });

});

export default Router;
