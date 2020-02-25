import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    router: service(),
    types: ["Standard", "Bundle", "Sale"],

    actions: {
        async delete() {
            try {
                await this.model.destroyRecord();
                this.router.transitionTo('index');
            } catch (error) {
                throw err;
            }
        },

        async setActive() {
            try {
                set(this.model, "active", !this.model.active);
                await this.model.save();
            } catch (error) {
                throw error;
            }
        },

        async save() {
            try {
                await this.model.save();
            } catch (error) {
                throw error;
            }
        },

        addKeyword(prop) {
            this.properties.pushObject(prop);
            set(this, "property", "")
        },

        deleteKeyword(prop) {
            this.properties.removeObject(prop);
        },
    }
});
