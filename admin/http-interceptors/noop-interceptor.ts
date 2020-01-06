import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, pipe,of } from 'rxjs';
import { catchError,map,tap,} from 'rxjs/operators';
import { RouterModule, Router } from '@angular/router';
/** Pass untouched request through to the next request handler. */
@Injectable(   )
export class NoopInterceptor implements HttpInterceptor {
    myname : string;
    constructor(
        private router : Router
    ){}
intercept(req: HttpRequest<any>, next: HttpHandler):
Observable<HttpEvent<any>> {
// Observable httpresponse return 401 Unauthorized 
// redirect to /login page
    return next.handle(req).pipe(catchError(this.handleError2<any>(HttpResponse)));

}




handleError2<T>(result : T){
return (error:any) : Observable<T> => {
if (error.status === 401 || error.status === 403) {
localStorage.clear();
// this.router.navigate(['/Post']);
window.location.reload();
return of (result as T);
}
return of (result as T) ;
}
}




}

