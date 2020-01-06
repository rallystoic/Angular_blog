import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private router: Router
    ) { }



    // check true or false based on token storage
logintoken(): Observable<boolean> {
const token = window.localStorage.getItem('token');
if (token !== null) {
     // console.log("token is not null");
return of(true);
 }
else if (token === null) {
// console.log("token is null");
// this.router.navigate(['/login']);
	window.localStorage.clear();
	// window.location.reload();
return of(false);
}
}

IsSuperUser(): Observable<boolean> {
const tokenrole = window.localStorage.getItem('role');
const token = window.localStorage.getItem('token');
if (tokenrole !== 'administrator' && token === null) {
window.localStorage.clear();
// this.router.navigate(['/post']);
// window.location.reload();
return of(false);
} else if (tokenrole === 'administrator' && token !== null) {
return of(true);
}
}


}
