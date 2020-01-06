import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SucceedInformation, Category } from '../../model/baseclass';
import { PostcontentService } from '../../services/postcontent.service';
import { RouterModule, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatSelectModule } from '@angular/material/select';
import { QuillModule  } from 'ngx-quill';

@Component({
  selector: 'app-createpostcontent',
  templateUrl: './createpostcontent.component.html',
  styleUrls: ['./createpostcontent.component.css']
})
export class CreatepostcontentComponent implements OnInit {
constructor(
private postservice: PostcontentService,
private router: Router,
private fb: FormBuilder
) { }
// File img
fileimg: File;
detail: string;
// ---POSTCONTENT FROMGROUP---------
PostcontentForm = this.fb.group({
posttitle: [''],
contentdetail: [''],
imgfile: [''],
categoryid: [''],
userid: ['']
});
// ---End of POSTCONTENT FORMGROUP----
// new object
ccategory: Category[];
// properties
titlepayload: string;
contentpayload: string;
CategoryNum: number;
UserNum: number;
CategoryStr: string;
UserNumStr: string;
succeedinformation: SucceedInformation;
// ********************************
code: number;
amessage: string;
selected: number;
headers: string[];
// function
// ***************************************************************************************************/
// Function start below
// ***************************************************************************************************/

// creating a post content method
// sending form
sendpayloadform() {
if (typeof this.selected === 'undefined') {
this.detail = "Please Select a category";
}
const postpayloadform = new FormData();
this.PostcontentForm.get('userid').setValue(localStorage.getItem('UserID'));
this.PostcontentForm.get('categoryid').setValue(this.selected.toString());
// append form
postpayloadform.append('posttitle', this.PostcontentForm.get('posttitle').value );
postpayloadform.append('contentdetail', this.PostcontentForm.get('contentdetail').value );
postpayloadform.append('imgfile', this.PostcontentForm.get('imgfile').value );
postpayloadform.append('categoryid', this.PostcontentForm.get('categoryid').value );
postpayloadform.append('userid', this.PostcontentForm.get('userid').value );


this.postservice.createPostwithFormdata(postpayloadform).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed === true) {
this.router.navigate(['/Post']);
} else if (this.succeedinformation.issucceed === false) {
this.detail = 'please comeplet all form';
}
});


}


onfileSelect(event: any) {
// set event file to File type = fileimg
this.fileimg = event.target.files[0];
// console.log(this.fileimg);
this.PostcontentForm.get('imgfile').setValue(this.fileimg);
}

// get category
fetchcategory() {
this.postservice.getCategory().subscribe(ccategory => this.ccategory = ccategory);
}


  ngOnInit() {

  this.fetchcategory();
  }

}
