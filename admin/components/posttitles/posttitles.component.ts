import { Component, OnInit, Input } from '@angular/core';
import { Posttitle, SucceedInformation, Totallength,
PosttitleTable
} from '../../model/baseclass';
import { PostcontentService } from '../../services/postcontent.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { timer  } from 'rxjs';
@Component({
  selector: 'app-posttitles',
  templateUrl: './posttitles.component.html',
  styleUrls: ['./posttitles.component.css']
})
export class PosttitlesComponent implements OnInit {

constructor(
private postcontent: PostcontentService,
private router: ActivatedRoute
) { }

// Properties
ptitles: Posttitle[] = [];
succeedinformation: SucceedInformation;
totallength: Totallength;
posttitletable: PosttitleTable[] = [];
// testing Onchange
// this property will mutate
Cnum: number;
// number parameters to to get data from server
defaultnum = 0;
// number display on DOM
DOMnum = 1;
maxpage: number;
Pnum: number;

getpostlist(): void {
this.postcontent.GetPostTitlesTable(this.defaultnum).subscribe(posttitletable => {
this.posttitletable = posttitletable;
}
);
}

// remove post
removepost(namee: string) {
const Rmresult = window.confirm('do you want to remove?');
if (Rmresult === true) {
this.postcontent.deletepostcontent(namee).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed === true) {
this.getpostlist();
}
}
);
}

}
// end

// get totallength of postcontent
gettotalpostcontent(): void {
const maxcon = 12;
this.postcontent.totalTableformat().subscribe(totallength => {
this.totallength = totallength;
console.log(this.totallength.total);
this.maxpage = Math.ceil(this.totallength.total / maxcon);
console.log(this.maxpage);
this.maxpage -= 1;
// console.log(this.maxpage);
});
}

// increament by 1
incremented() {
if (this.defaultnum >= this.maxpage) {
this.defaultnum -= 1;
}
this.defaultnum += 1;
this.postcontent.GetPostTitlesTable(this.defaultnum).subscribe(posttitletable => {
this.posttitletable = posttitletable;
this.DOMnum = this.defaultnum + 1;
});
}
// total divide by page and limit page by not increase number
// decrement by 1
decremented() {
if (this.defaultnum === 0) {
this.defaultnum += 1;
}
this.defaultnum -= 1;
this.postcontent.GetPostTitlesTable(this.defaultnum).subscribe(posttitletable => {
this.posttitletable = posttitletable;
// DOM number
this.DOMnum = this.defaultnum + 1;
// console.log(this.defaultnum);
});
}


removepostcontent(id: string) {
const result = window.confirm('do you want to remove?');
if (result) {
const timewait = timer(500);
this.postcontent.deletepostcontent(id).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed === true) {
timewait.subscribe(() => {
this.getpostlist();
this.gettotalpostcontent();
});
}
});
}


}

// pratend to child
// with Ngonchange
newchange(id: number) {
console.log(`fire! ${id}`);
console.log(`property value of cnum is : ${this.Cnum}`);
this.postcontent.CreateHighlight(id).subscribe(x => {
this.succeedinformation = x;
console.log(x.issucceed);
this.Cnum = id;
});
}

// parents component listen to a child component
listenfromchild(id: number) {
console.log( ' function called for a name Listenfromchild ' + id.toString());
}


ngOnInit() {
this.getpostlist();
this.gettotalpostcontent();
}

}
