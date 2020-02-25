import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),
    router: service(),

    packetStatus: false,
    types: ["Standard", "Bundle", "Sale"],
    properties: [],

    validateValues() {
        if(this.packetName && this.packetDescription && this.type && this.packetAmount && this.displayedPrice) {
            return true;
        } else {
            return false;
        }
    },

    actions: {
        addKeyword(prop) {
            this.properties.pushObject(prop);
            set(this, "property", "")
        },

        deleteKeyword(prop) {
            this.properties.removeObject(prop);
        },

        async save() {
            try {
                if(this.validateValues()) {
                    const newPacket = await this.store.createRecord('packet', {
                        name: this.packetName,
                        description: this.packetDescription,
                        amount: this.packetAmount,
                        displayedPrice: this.displayedPrice,
                        packetType: this.type,
                        packetProperties: this.properties,
                        active: this.packetStatus
                    })
                    await newPacket.save();
                    this.router.transitionTo('index')
                } else {
                    this.toastr.error("Bitte füllen sie jedes feld aus", "Fehler");
                }
            } catch (error) {
                this.toastr.error("Etwas ist schiefgelaufen", "Fehler")
                throw error;
            }
        }
    }
});
