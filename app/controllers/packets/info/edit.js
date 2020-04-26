import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    router: service(),
    toastr: service('toast'),
    types: ["Standard", "Bundle", "Sale"],

    actions: {
        async delete() {
            try {
                await this.model.destroyRecord();
                this.router.transitionTo('index');
                this.toastr.success("Deleted packet", "Success!");
            } catch (error) {
                throw error;
            }
        },

        async setActive() {
            try {
                set(this.model, "active", !this.model.active);
                await this.model.save();
                this.toastr.success(`Set active to: ${this.model.active}`, "Success!");
            } catch (error) {
                throw error;
            }
        },

        async save() {
            try {
                await this.model.save();
                this.toastr.success("Updated packet", "Success!");
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
