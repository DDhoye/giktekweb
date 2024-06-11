import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

login(email: string | undefined | null, password: string | undefined | null): Observable<boolean> {
  if (!email || !password) {
    throw new Error('Email and password must be provided');
  }

  return this.http.get<any[]>('http://localhost:3000/users').pipe(
    map(users => {
      console.log('Users from server:', users);
      const user = users.find(user => user.username === email && user.password === password);
      console.log('Found user:', user);
      return !!user;  // return true if user exists, otherwise false
    })
  );
}
signup(email: string, password: string): Observable<boolean> {
  return this.http.post<any>('http://localhost:3000/users', { username: email, password }).pipe(
    map(response => {
      console.log('Response from server:', response);
      return !!response;  // return true if response exists, otherwise false
    })
  );
} 
}