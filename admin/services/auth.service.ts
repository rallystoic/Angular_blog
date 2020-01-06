import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  getAuthorizationToken(): string {
const token = localStorage.getItem('token');
const bearer = `Bearer ${token}` ;
return bearer;
  }
}
