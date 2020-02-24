import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    types: ["Standard", "Bundle", "Sale"],
    properties: [],

    actions: {
        addKeyword(prop) {
            this.properties.pushObject(prop);
            set(this, "property", "")
        },

        deleteKeyword(prop) {
            this.properties.removeObject(prop);
        }
    }
});
