import {AbstractControl, AsyncValidator} from "@angular/forms";
import {Injectable} from "@angular/core";
import {AuthService} from "../../shared/services/auth.service";
import {catchError, map, Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {
  }


  validate = (control: AbstractControl): Observable<any> => {
    const { value } = control;
    const baseUrl = 'https://api.angular-email.com/auth/';
    const requestBody = {username: value};
    // return this.http.post<any>(baseUrl + 'username', requestBody)

    return this.authService.usernameAvailable(requestBody).pipe(
      map((value): any => {
        // console.log(value);
        if (value.available) {
          return null;
        }
      }),
      catchError((err) => {
        // // Prints HttpErrorResponse
        // console.log(err);

        if (err.error.username === 'Username in use')  {
          return of({ nonUniqueUsername : true})
        }
        return of({ noConnection : true})
      })
    );
    // this.authService.usernameAvailable({username: value}).subscribe({
    //   next: (response: any) => {
    //     if (response['available']) {
    //       return null
    //     }
    //     else {
    //       return {bruh: true}
    //     }
    //   },
    //   error: err => {
    //     return {bruh: true}
    //
    //   }
    // })
  }

}
