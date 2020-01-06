import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostcontentService  } from '../../services/postcontent.service';
import { QuillModule } from 'ngx-quill';
import { Postdetail, Category, Updatepayload, SucceedInformation } from '../../model/baseclass';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
selector: 'app-postedit',
templateUrl: './postedit.component.html',
styleUrls: ['./postedit.component.css']
})
export class PosteditComponent implements OnInit {
constructor(
private router: Router,
private route: ActivatedRoute,
private  postcontent: PostcontentService
) { }

categories: Category[] = [];
postdetail: Postdetail;
succeedinformation: SucceedInformation;
// FROMGROUP for postcontent
PostcontentForm = new FormGroup(
{
title : new FormControl(''),
imgfile: new FormControl(''),
contentdetail : new FormControl('')
});
//title: string;
//content: string;
payloadcontent: string;
selected: string;
updatepayload = new Updatepayload();
// fetch postdetail
getpostdetail() {
const id = + this.route.snapshot.paramMap.get('id');
this.postcontent.postcontentDetail(id).subscribe( postdetail => {
this.postdetail = postdetail;
this.selected = this.postdetail.categoryid.toString();
this.PostcontentForm.patchValue({
title : this.postdetail.posttitle,
contentdetail : this.postdetail.contentdetail
});
}
);
}

// fetch Category
getcategories() {
this.postcontent.getCategory().subscribe(categories => {
this.categories = categories;
}
);
}
// on file select

onfileselect(event : any) {
const file = event.target.files[0];
this.PostcontentForm.get('imgfile').setValue(file);
}

// updating postcontent
updatepost() {
const result = window.confirm('confirm?');
if (result === true) {
const updateform = new FormData();
// append form 
updateform.append('postid', this.postdetail.postid.toString());
updateform.append('posttitle', this.PostcontentForm.get('title').value);
updateform.append('contentdetail', this.PostcontentForm.get('contentdetail').value );
updateform.append('imgfile', this.PostcontentForm.get('imgfile').value);
updateform.append('categoryid', this.selected.toString());

// sendpayload
this.postcontent.updatepostcontentForm(updateform).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed === true) {
const urlid = `admin/postdetail/${this.postdetail.postid}`;
this.router.navigate([urlid]);
}
else if (!this.succeedinformation.issucceed) {
// maybe redirect to error page component
}

}
);
}

}

ngOnInit() {
this.getpostdetail();
this.getcategories();
}

}
