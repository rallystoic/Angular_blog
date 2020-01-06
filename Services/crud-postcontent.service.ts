import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { postpayload, message, category, SucceedInformation,
updatepayload, postdetailfull, Postdetail } from 'src/app/Entities/postpayload';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudPostcontentService {

constructor(
private http: HttpClient

) { }
// environment url
apiurl: string = environment.API_URL;
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// *********************************************************************************
// *********************************************************************************
// *********************************************************************************
//  Method start from here on
// *********************************************************************************
// postdetail
detail(id: number): Observable<Postdetail> {
const url = `${this.apiurl}/api/postcontent/detail/${id}`;
return this.http.get<Postdetail>(url, this.httpOptions).pipe(catchError(this.handleError<Postdetail>('detail')));
}
// postdetail
private handleError<T>(operation = 'operation', result?: T) {
return (error: any ): Observable<T> => {
console.error(error);
return of (result as T);
}
}


}
