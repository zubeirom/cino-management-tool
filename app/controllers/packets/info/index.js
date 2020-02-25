import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),

    actions: {
        async delete() {
            try {
                await this.model.destroyRecord();
                this.router.transitionTo('index');
            } catch (error) {
                throw error;
            }
        }
    }
});
