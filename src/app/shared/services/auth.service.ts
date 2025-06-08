import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface UsernameAvailableResponse {
  available: true
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://api.angular-email.com/auth/';

  usernameAvailable(requestBody: {username: string}) {
    return this.http.post<UsernameAvailableResponse>(this.baseUrl + 'username', requestBody);
  }
}
