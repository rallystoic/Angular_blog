import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SucceedInformation, User, UserPayload, UserUpdatePayload, Totallength, Validateinformation,
Challengepayload } from '../model/baseclass';

// global url
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(
private http: HttpClient
) { }
// default httpOptions
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
httpOptionsMultipart = {
headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

apiurl: string = environment.API_URL;

 formData = new FormData();


// fetch users list with http get


getusers(): Observable<User[]> {
return this.http.get<User[]>(`${this.apiurl}/api/users`, this.httpOptions).pipe(
catchError(this.handdleError<User[]>('getusers', [])));

}
// get user detail
getuserdetail(id: number): Observable<User> {
const url = `${this.apiurl}/api/user/detail/${id}`;
console.log(url);
return this.http.get<User>(url, this.httpOptions).pipe(catchError(this.handdleError<User>('getuserdetail', )));
}


// createuser
createuser(userpayload: UserPayload): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/user`;
console.log(url);
return this.http.post<SucceedInformation>(url, userpayload, this.httpOptions).pipe
(catchError(this.handdleError<SucceedInformation>('createuser')));
}


// update user
updateUser(userupdatepayload: UserUpdatePayload): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/user`;
console.log(url);
return this.http.put<SucceedInformation>(url, userupdatepayload, this.httpOptions).pipe(
catchError(this.handdleError<SucceedInformation>('updateUser')));
}


totalusers(): Observable<Totallength> {
const url = `${this.apiurl}/api/user/total`;
return this.http.get<Totallength>(url, this.httpOptions).pipe(catchError(this.handdleError<Totallength>('totalusers')));
}

// user list
getuserpage(id: number): Observable<User[]> {
const url = `${this.apiurl}/api/user/page/${id}`;
return this.http.get<User[]>(url, this.httpOptions).pipe(catchError(this.handdleError<User[]>('totalusers', [])));
}


// remove  user Http delete
removeuser(id: string): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/user/${id}`;
return this.http.delete<SucceedInformation>(url, this.httpOptions).pipe(
catchError(this.handdleError<SucceedInformation>('removeuser')));
// console.log(`${this.apiurl}/api/users/{id}`);
}


// upload from
uploadfile(form: FormData): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/upload/image`;
return  this.http.post<SucceedInformation>(url, form).pipe(catchError(this.handdleError<SucceedInformation>('uploadfile')));
}


// Authentication
userauthenticate(challenge: Challengepayload): Observable<Validateinformation> {
const url = `${this.apiurl}/api/login`;
return this.http.post<Validateinformation>(url, challenge).pipe(catchError(this.handdleError<Validateinformation>('userauthenticate')));
}


// after authentication is succeeded

SetToLocalstorage(validateinformation: Validateinformation) {
localStorage.setItem('UserID',  validateinformation.userID.toString());
localStorage.setItem('token',  validateinformation.token );
localStorage.setItem('firstname',  validateinformation.firstname );
localStorage.setItem('lastname',  validateinformation.lastname );
localStorage.setItem('role',  validateinformation.role );
}


private handdleError<T>( operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
console.error(error);
return of (result as T );
}
}

}
