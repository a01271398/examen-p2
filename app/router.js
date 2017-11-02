import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tests', {path: '/'});
  this.route('exam-detail', {path: '/exam-detail/:test'});
});

export default Router;
