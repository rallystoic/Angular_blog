import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SucceedInformation, UserPayload, Nest } from '../../model/baseclass';
import { UserService  } from '../../services/user.service';
import { Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

constructor(
private userservice: UserService,
private fb: FormBuilder,
private router: Router

) { }
// ******************************
//  Property declaration
userpayload = new UserPayload();
succeedinformation: SucceedInformation;

detail: string;

// ******************************
// ------ new formGruop-------

userdetail = this.fb.group({
username  : [''],
password  : [''],
userfirstname  : [''],
userlastname  : ['']
});
uploadform = this.fb.group({
username : [''],
password : [''],
userfirstname : [''],
userlastname : [''],
filename : [''],
filename2 : ['']
});
// ---- end formGruop--------
//
// property

nest: Nest = { name : 'yeah',
postlist : [
{ PostID : 1, PostTitle : 'hello world'},
{ PostID : 2, PostTitle : 'ddfjgdfg'}
],
status : 30
};

// end of property
// Createuser function
createuser() {
this.userpayload.username = this.userdetail.get('username').value;
this.userpayload.password = this.userdetail.get('password').value;
this.userpayload.userfirstname = this.userdetail.get('userfirstname').value;
this.userpayload.userlastname = this.userdetail.get('userlastname').value;
this.userservice.createuser(this.userpayload).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed === true) {
// console.log(succeedinformation.issucceed);
this.router.navigate(['admin/users'])
}else if (this.succeedinformation.issucceed === false) {
this.detail = this.succeedinformation.succeedDetail;
}
},
);
}
onfileSelect(event: any) {
if (event.target.files.length > 0) {
const file = event.target.files[0];
this.uploadform.get('filename').setValue(file);
}
console.log(this.uploadform.get('filename').value);
console.log(event.target.files.size);
}
onfileSelect2(event: any) {
// console.log(event.target.files[0]);
this.uploadform.get('filename').setValue(event.target.files[0]);
console.log(this.uploadform.get('filename').value);
}

// uploadfile test with image
// webapi form
uploadfile() {
const formData = new FormData();
formData.append('username', this.uploadform.get('username').value);
formData.append('password', this.uploadform.get('password').value);
formData.append('userfirstname', this.uploadform.get('userfirstname').value);
formData.append('userlastname', this.uploadform.get('userlastname').value);
formData.append('filename', this.uploadform.get('filename').value);

this.userservice.uploadfile(formData).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
console.log(this.succeedinformation.issucceed);
console.log(this.succeedinformation.succeedDetail);
if (this.succeedinformation.issucceed) {
window.location.reload();
}
}
);
}
testing() {
console.log(this.nest.name);
console.log(this.nest.postlist[1].PostTitle);
console.log(this.nest.status);
}
  ngOnInit() {
  }
}
