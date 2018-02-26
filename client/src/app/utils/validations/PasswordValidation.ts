import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
    passwordStr = 'passwod';
    passwordRStr = 'repeatpassword';

    static MatchPassword(ac: AbstractControl) {
        // let password = ac.get(this.passwordStr).value;
        // let rePassword = ac.get(this.passwordRStr).value;

        // if(password != rePassword) {
        //     console.log("passsword not match");
        //     ac.get('repeatpassword')
        // }
    }
}