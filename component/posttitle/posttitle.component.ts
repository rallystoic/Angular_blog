import { Component, OnInit } from '@angular/core';
import { posttitle } from 'src/app/Entities/posttitle';
import { Router } from '@angular/router';
import { PostcontentService  } from '../../admin/services/postcontent.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-posttitle',
  templateUrl: './posttitle.component.html',
  styleUrls: ['./posttitle.component.css']
})
export class PosttitleComponent implements OnInit {

constructor(
private postcontentservice: PostcontentService,
private router: Router
) { }
apiurl: string = environment.API_URL;
headers: string[];
code: string;
// for highlight section
highpost: posttitle[] = [];

// for news section
ptitle: posttitle[];


Post(): void {
this.postcontentservice.getpostbypage(0).subscribe(ptitle => {
this.ptitle = ptitle;
});
}


getHighligh() {
this.postcontentservice.HightligtFrontpage().subscribe(x => {
this.highpost = x;
});
}
// storage Func Fold

// click function
// remove post

// edit post redirect
//


  ngOnInit() {
  this.Post();
  this.getHighligh();
  }

}
