import {AbstractControl} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {formatDate} from "@angular/common";
import {convertToParamMap} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthValidators {
  constructor(public authService: AuthService) {
  }
  static matchFields(field1: string, field2: string) {
    return (form: AbstractControl) => {
      const val1 = form.value[field1];
      const val2 = form.value[field2];
      if (val1 === val2) {
        return null;
      }
      // Sets to true if not matching (that means error present)
      return {matchFields: true}
    }
  }

  // static usernameTaken(username: string) {
  //   return ((form: AbstractControl) => {
  //     const requestBody = {'username': form.value[username]};
  //     this.authService.checkIfUsernameExists(requestBody).subscribe((response: any) => {
  //       if (response.username === 'Username in use') {
  //         return {usernameTaken: true};
  //       }
  //
  //       return null;
  //     })
  //   })
  // }

  // Potentially in the future, here is a more generic version to check any credential
  // Can be used to check emails or other things maybe
  // static credentialTaken(credential)
}
