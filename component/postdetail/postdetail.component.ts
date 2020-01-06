import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';
import { Postdetail, SucceedInformation} from 'src/app/Entities/postpayload';
import { CrudPostcontentService } from 'src/app/Services/crud-postcontent.service';
import { QuillViewComponent } from 'ngx-quill';
@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

constructor(
private route: ActivatedRoute,
private location: Location,
private crud: CrudPostcontentService,
private router: Router
) { }

postdetail: Postdetail;


goback(): void {
this.location.back();
}

fetchpostdetail(): void {
const id = + this.route.snapshot.paramMap.get('id');
this.crud.detail(id).subscribe(postdetail => this.postdetail = postdetail);
}


  ngOnInit() {
  this.fetchpostdetail();
  }

}
