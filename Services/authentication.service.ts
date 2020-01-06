import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { authpayload,authcontext } from 'src/app/Entities/postpayload';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import  { catchError,map,tap } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(
private http: HttpClient
) { }

// no bearer key for this
httpOption = {
headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};
  // authentication
  auth(payload : authpayload): Observable<authcontext> {
  const loginUrl = 'https://localhost:5001/api/Login';
  return this.http.post<authcontext>(loginUrl, payload, this.httpOption).pipe(catchError(this.handleError<authcontext>('auth')));
  }


verifytoken():boolean {
const token =	window.localStorage.getItem('token');
if (token) {
console.log('true');
return true;
}
console.log('false');
return false;
}


private handleError<T> (operation = "operation", result?: T)
{
return (error:any ): Observable<T> =>{
	console.error(error);
	return of (result as T);
	}
}


}
