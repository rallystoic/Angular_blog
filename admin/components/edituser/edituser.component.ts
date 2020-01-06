import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserPayload, User, UserUpdatePayload, SucceedInformation} from '../../model/baseclass';
import { UserService  } from '../../services/user.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

constructor(
private fb: FormBuilder,
private userservice: UserService,
private route: ActivatedRoute,
private location: Location
) { }
// creating new form
//
// form with formbuilder

// user profil form
profileForm = this.fb.group({
firstName : [''],
lastName : [''],
address : this.fb.group({
street : [''],
city : [''],
state : [''],
zip : ['']
})
});

// author profil
authorForm = this.fb.group({
username : [''],
firstname : [''],
lastname : [''],
password : [''],
role : ['']
});
userpayload = new UserPayload();
user: User;
userpaylaod = new UserUpdatePayload();
succeedinformation: SucceedInformation;
fetchuser() {
const id = + this.route.snapshot.paramMap.get('id');
this.userservice.getuserdetail(id).subscribe(user => {
this.user = user;
console.log(this.user);
this.authorForm.patchValue({
username : this.user.username,
firstname : this.user.userfirstname,
lastname : this.user.userlastname,
role : this.user.rolename
});
}
);
}
// update function
// create new object
updateprofile() {
// console.log('fire');
this.userpaylaod.userid = this.user.userid;
console.log(this.userpaylaod.userid);
this.userpaylaod.userfirstname = this.authorForm.get('firstname').value;
this.userpaylaod.userlastname = this.authorForm.get('lastname').value;
this.userpaylaod.password = this.authorForm.get('password').value;
this.userservice.updateUser(this.userpaylaod).subscribe(succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed) {
this.location.back();
}
},
);

}





  ngOnInit() {
this.fetchuser();
  }

}
