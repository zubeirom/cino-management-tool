import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  message: DS.attr(),
  email: DS.attr(),
  tel: DS.attr(),
  packet: DS.attr(),
  paypalId: DS.attr(),
  bookingId: DS.attr(),
  createdAt: DS.attr(),
});
