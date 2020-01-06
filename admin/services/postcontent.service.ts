import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {
Postpayload, SucceedInformation, Updatepayload, Postdetail,
Posttitle, Category, CategoryPayload, TotalPosTitle, Totallength,
PosttitleTable, Highlight
} from '../model/baseclass';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
}) export class PostcontentService {
constructor(
private http: HttpClient
) { }
// default httpOptions
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

apiurl: string = environment.API_URL;
totalposttitle: TotalPosTitle;



// createpost service with json body;
createpost(postpayload: Postpayload): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent`;
return this.http.post<SucceedInformation>(url, postpayload, this.httpOptions).pipe(catchError
(this.handleError<SucceedInformation>('createpost')));
}


//  createpost with using Formdata
createPostwithFormdata(formdata: FormData): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent`;
return this.http.post<SucceedInformation>(url, formdata).pipe(catchError
(this.handleError<SucceedInformation>('createPostwithFormdata')));
}


// deletepost service
 deletepostcontent(id: string): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent/${id}`;
return this.http.delete<SucceedInformation>(url, this.httpOptions).pipe(catchError
(this.handleError<SucceedInformation>('deletepostcontent')));
}

// updatepost service
updatepostcontent(updatepayload: Updatepayload): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent`;
return this.http.put<SucceedInformation>(url, updatepayload, this.httpOptions).pipe
(catchError(this.handleError<SucceedInformation>('updatepostcontent')));
}

// update service with formdata
//
//updatepostcontentWithFormdata(formdata: FormData): Observable<SucceedInformation> {
//const url = `${this.apiurl}/api/postcontent`;
//return this.http.put<SucceedInformation>(url,formdata).pipe(catchError(this.handleError<SucceedInformation>('updatepostcontentForm')));
//}

// updatepostcontent with formdata
updatepostcontentForm(formdata: FormData): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent`;
return this.http.put<SucceedInformation>(url, formdata).pipe
(catchError(this.handleError<SucceedInformation>('updatepostcontentForm')));
}

// get a list of postcontent service
postcontentlist(): Observable<Posttitle[]> {
const url = `${this.apiurl}/api/postcontent`;
return this.http.get<Posttitle[]>(url, this.httpOptions).pipe(catchError(this.handleError<Posttitle[]>('postcontentlist', [])));
 }


// get a list of postcontent by page
getpostbypage(id: number): Observable<Posttitle[]> {
const url = `${this.apiurl}/api/postcontent/page/${id}`;
return this.http.get<Posttitle[]>(url, this.httpOptions).pipe(catchError(this.handleError<Posttitle[]>('postcontentlist', [])));
}
// get total of postcontent
gettotalpost(): Observable<Totallength> {
const url = `${this.apiurl}/api/postcontent/total`;
return this.http.get<Totallength>(url, this.httpOptions).pipe(catchError(this.handleError<Totallength>('postcontentlist')));
}


// get total of table postcontent
totalTableformat(): Observable<Totallength> {
const url = `${this.apiurl}/api/postcontent/tableformat/total`;
return this.http.get<Totallength>(url, this.httpOptions).pipe(catchError(this.handleError<Totallength>('totalTableformat')));
}



// getpostdetail service
// postcontentDetail(id: string): Observable<Postdetail[]> {
// const url = `${this.apiurl}/api/postcontent/${id}`;
// return this.http.get<Postdetail[]>(url, this.httpOptions).pipe(catchError(this.handleError<Postdetail[]>('postcontentDetail', [])));
// }

// getpostdetail without array
postcontentDetail(id: number): Observable<Postdetail> {
const url = `${this.apiurl}/api/postcontent/detail/${id}`;
return this.http.get<Postdetail>(url, this.httpOptions).pipe(catchError(this.handleError<Postdetail>('postcontentDetail')));
}




// get a list of Category
getCategory(): Observable<Category[]> {
const url = `${this.apiurl}/api/category`;
return this.http.get<Category[]>(url, this.httpOptions).pipe(catchError(this.handleError<Category[]>('getCategory', [])));
}


// create new category
createCategory(categorypayload: CategoryPayload): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/category`;
return this.http.post<SucceedInformation>(url, categorypayload, this.httpOptions)
.pipe(catchError(this.handleError<SucceedInformation>('removeCategory')));
}


// remove category
removecategory(id: string): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/category/${id}`;
return this.http.delete<SucceedInformation>(url, this.httpOptions)
.pipe(catchError(this.handleError<SucceedInformation>('removeCategory')));
}
// update Category
updatecategory(category: Category): Observable<SucceedInformation> {
// user input is CategoryName only
const url = `${this.apiurl}/api/category`;
return this.http.put<SucceedInformation>(url, category, this.httpOptions)
.pipe(catchError(this.handleError<SucceedInformation>('removeCategory')));
}




// search postcontent

searchpostcontent(term: string): Observable<Posttitle[]> {
if (!term.trim()) {
// if not search term, return empty arry
return of ([]);
}
const url = `${this.apiurl}/api/postcontent/searchno/${term}`;
return this.http.get<Posttitle[]>(url, this.httpOptions)
.pipe(catchError(this.handleError<Posttitle[]>('searchpostcontent', [])));
}


// Search posttitle and provide total result

// TotalPosTitle
searchtotal(): Observable<TotalPosTitle> {
const url = `${this.apiurl}/api/postcontent/searchno/ee`;
return this.http.get<TotalPosTitle>(url, this.httpOptions).pipe(catchError(this.handleError<TotalPosTitle>('searchtotal')));
}

// getpost in table format

GetPostTitlesTable(id: number): Observable<PosttitleTable[]> {
const url = `${this.apiurl}/api/postcontent/tableformat/page/${id}`;
return this.http.get<PosttitleTable[]>(url, this.httpOptions).pipe(catchError(this.handleError<PosttitleTable[]>('GetPostTitlesTable')));
}





// Gethighlight on frontpage

HightligtFrontpage(): Observable<Posttitle[]> {
const url = `${this.apiurl}/api/postcontent/frontpage/highlight`;
return this.http.get<Posttitle[]>(url, this.httpOptions).pipe(catchError(this.handleError<Posttitle[]>('HightligtFrontpage')));

}

// create highlight section
// role allowed = author, administrator
CreateHighlight(id: number): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent/highlight/${id}`;
return  this.http.post<SucceedInformation>(url, this.httpOptions).pipe(catchError(this.handleError<SucceedInformation>('CreateHighlight')));
}

deleteHighlight(id: number): Observable<SucceedInformation> {
const url = `${this.apiurl}/api/postcontent/highlight/${id}`;
return  this.http.delete<SucceedInformation>(url).pipe(catchError(this.handleError<SucceedInformation>('deleteHighlight')));
}
// this is a tableformat
Gethighlight(): Observable<Highlight[]> {
const url = `${this.apiurl}/api/postcontent/tableformat/highlight`;
return  this.http.get<Highlight[]>(url, this.httpOptions).pipe(catchError(this.handleError<Highlight[]>('Gethighlight')));

}










// Handle ERROR for development
private handleError<T>(operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
console.error(error);
return of (result as T);
}
}
// handle error in production
private handleErrorProduction<T>(operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
// redirect to Error component
return of (result as T);
}
}


}

