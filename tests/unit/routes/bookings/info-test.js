import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bookings/info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bookings/info');
    assert.ok(route);
  });
});
