import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('packets', function() {
    this.route('new');
    this.route('info', function() {
      this.route('edit');
    });
  });
  this.route('bookings', function() {
    this.route('info');
  });
  this.route('login');
});

export default Router;
