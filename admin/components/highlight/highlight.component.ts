import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter  } from '@angular/core';
import { PostcontentService  } from '../../services/postcontent.service';
import { Postdetail, Highlight, SucceedInformation } from '../../model/baseclass';
import { timer } from 'rxjs';


@Component({
selector: 'app-highlight',
templateUrl: './highlight.component.html',
styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit, OnChanges {
text: string;

@Input() Cnum: number;
@Output() Outnum = new EventEmitter<number>();
@Output() Outstring = new EventEmitter<string>();
@Output() Outboolean = new EventEmitter<boolean>();
postdetail: Postdetail;
highlight: Highlight[] = [];
succeedinformation: SucceedInformation;
constructor(
  private postservice: PostcontentService
  ) { }
// prototyping
getpostdetail(idd: number) {
this.postservice.postcontentDetail(idd).subscribe(x =>
this.text = x.posttitle
);
}

// remove from highlight

removefromhg(id: number) {
const timeawait = timer(500);
this.postservice.deleteHighlight(id).subscribe(x => {
this.succeedinformation = x;
console.log(x.issucceed);
if (this.succeedinformation.issucceed === true) {
timeawait.subscribe( () => {
this.FetchHighlight();
this.Outnum.emit(20);
});

}
});
}

// a child output value to a parent comeponent
outputvalue() {
this.Outnum.emit(4);
// this.Outstring.emit('hello');
// this.Outboolean.emit(false);
console.log( ' a call from outputvalue : ' + this.Outnum);
console.log(this.Outstring);
console.log(this.Outboolean);
}

// fetch highlight post
FetchHighlight() {
this.postservice.Gethighlight().subscribe(x => {
this.highlight = x;
}
);
}



ngOnInit() {
this.FetchHighlight();
}


ngOnChanges(changes: {[propKey: string]: SimpleChange} ) {
const timeawait = timer(500);
console.log(`output from child ${this.Cnum}`);
console.log(changes);
this.getpostdetail(this.Cnum);
timeawait.subscribe(() => {
this.FetchHighlight();
});
}

}
