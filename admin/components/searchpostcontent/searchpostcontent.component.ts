import { Component, OnInit, Output } from '@angular/core';
import { PostcontentService } from '../../services/postcontent.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';
import { Posttitle} from '../../model/baseclass';
import { EventEmitter } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-searchpostcontent',
  templateUrl: './searchpostcontent.component.html',
  styleUrls: ['./searchpostcontent.component.css']
})
export class SearchpostcontentComponent implements OnInit {

constructor(
private postcontent: PostcontentService
) { }
testword: string;

testword$: Observable<string>;

totalobject: number;
visible: boolean ;
@Output() open: EventEmitter<any> = new EventEmitter();
@Output() close: EventEmitter<any> = new EventEmitter();
observable = new Observable(( observer: any) => {
observer.next(1);
observer.next(2);
observer.next(3);
setTimeout(() => {
observer.next(4);
observer.complete(); }, 4000); }
);

ptitle$: Observable<Posttitle[]>;
private searchTerms = new Subject<string>();



strtest: string[];
total: number;
displaytxt: string;
display(input: string) {
console.log(input);
this.displaytxt = input;
}



search(term: string ): void {
this.searchTerms.next(term);
}



  toggle() {
this.visible = !this.visible;
if (this.visible) {
this.open.emit(null);
console.log('visible');
} else {
this.close.emit(null);
console.log('not visible');
}
    }
// testing Observable
// *******************


prototype(name: string): Observable<string> {
return of(name);
}
multicast(userinput: string) {
this.prototype(userinput).subscribe(
x => {
this.testword = x;
}
);
console.log(this.testword$);
}

  ngOnInit() {
this.ptitle$ = this.searchTerms.pipe(
        debounceTime(300),
distinctUntilChanged(),
switchMap((term: string) => this.postcontent.searchpostcontent(term),

),
);
this.observable.subscribe(
{ next(x) { console.log('got value' + x);
},
error(err) { console.error('something wrong occured:' + err); },
complete() { console.log('done');
}
}

);
// this.prototype("Killer queen").subscribe( x =>
// 	{ console.log(x.toUpperCase());
// 		this.testword = x;
// 		console.log(this.testword);
// 	}
// );

this.prototype("eeeee").subscribe(
{
next(x) {
console.log(x);
this.testword$ = x.toUpperCase();
},
error(err) {
console.log('error :' + err);
},
complete() {
console.log('done');
}
}
);
}

}
