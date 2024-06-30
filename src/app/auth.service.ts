import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    const loginData = { email, password, role: '' }; // Prepare the login data object

    return this.http
      .post<any>('https://68.183.17.216:8080/api/visitors/login', loginData)
      .pipe(
        map((response) => {
          console.log('Login response:', response);
          // Handle response logic here
          return !!response; // Adjust as per your backend's response structure
        })
      );
  }
  signup(
    name: string,
    company: string,
    phone_number: string,
    email: string,
    password: string
  ): Observable<boolean> {
    const signupData = {
      visitorname: name,
      company: company,
      phone_number: phone_number,
      email: email,
      password: password,
    };

    return this.http
      .post<any>('https://68.183.17.216:8080/api/visitors', signupData)
      .pipe(
        map((response) => {
          console.log('Response from server:', response);
          return !!response.visitorid; // Return true if visitorid exists, false otherwise
        })
      );
  }
}
