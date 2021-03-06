import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('post', { path: '/post/:subreddit/:id' });
  this.route('login', { path: '/login' });
  this.route('auth', { path: '/auth' });
});
