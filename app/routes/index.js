import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { set } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return RSVP.hash({
            packets: this.store.findAll('packet'),
            bookings: this.store.findAll('booking')
        });
    },

    afterModel(model) {
       const sum = model.bookings.toArray().reduce((a, b) => a.packet.amount + b.packet.amount)
       set(model, "maxAmount", sum);
       set(model, "progress", sum / 1000 * 100)
    }
});
