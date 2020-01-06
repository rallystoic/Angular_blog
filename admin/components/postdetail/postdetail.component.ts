import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostcontentService } from '../../services/postcontent.service';
import { Postdetail, SucceedInformation } from '../../model/baseclass';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
import { QuillViewComponent  } from 'ngx-quill';

@Component({
selector: 'app-postdetail',
templateUrl: './postdetail.component.html',
styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

constructor(
private postcontent: PostcontentService,
private route: ActivatedRoute,
private router: Router
) { }
postdetail: Postdetail;
succeedinformation: SucceedInformation;

getpostdetail(): void {
const id  = +  this.route.snapshot.paramMap.get('id');
this.postcontent.postcontentDetail(id).subscribe(postdetail => {
this.postdetail = postdetail;
// if postdetail return [] then redirect to errorpage component
}
);
}


ngOnInit() {
this.getpostdetail();
}

}
