import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  amount: DS.attr(),
  displayedPrice: DS.attr(),
  packetType: DS.attr(),
  packetProperties: DS.attr(),
  duration: DS.attr(),
  active: DS.attr(),
  packetId: DS.attr(),
  imageUrl: DS.attr(),
  createdAt: DS.attr(),
});
