import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),
    session: service(),
    media: service(),

    isValid(username, password) {
        if (!username && !password) {
            this.toastr.warning('Please enter something', 'Warning');
            return false
        }
        return true
    },

    actions: {
        async authenticate() {
            set(this, 'loader', true);
            try {
                let { username, password } = this.getProperties('username', 'password');
                if (this.isValid(username, password)) {
                    await this.session.authenticate('authenticator:oauth2', username, password)
                    .catch((reason) => {
                        console.error(reason);
                        set(this, 'loader', false);                        
                        this.toastr.error('Password or username is wrong', 'Error');
                    });
                }
                set(this, 'loader', false);
            } catch (error) {
                set(this, 'loader', false);
                console.error(error);
                if (error) {
                    this.toastr.error('Password or username is wrong', 'Error');
                }
            }
        },
        redirect() {
            this.send('authenticate');
        }
    }
});
