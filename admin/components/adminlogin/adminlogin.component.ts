import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { authpayload, authcontext } from 'src/app/Entities/postpayload';
import { Postpayload, SucceedInformation, UserPayload,
Challengepayload,Validateinformation} from '../../model/baseclass';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

constructor(
private auth: AuthenticationService,
private fb: FormBuilder,
private router: Router,
private userservice: UserService
) { }
// declare properties
validateinformation: Validateinformation;
challengepayload = new Challengepayload();
authenticationform = new FormGroup({

username : new FormControl(''),
password : new FormControl('')
});
msg: string ;



// ***************************************************************************************************
// Methode start below
// ***************************************************************************************************

challenge() {
this.challengepayload.rname = this.authenticationform.get('username').value;
this.challengepayload.rpassword = this.authenticationform.get('password').value;
this.userservice.userauthenticate(this.challengepayload).subscribe(validateinformation =>{
this.validateinformation = validateinformation;
if (this.validateinformation.isSucceed === true) {
this.userservice.SetToLocalstorage(this.validateinformation);
window.location.reload();
}
else if (this.validateinformation.isSucceed === false) {
console.log("error");
}
}
);

}


// verify token
isauthenticated() {
const token = localStorage.getItem('token');
if (token !== null) {
this.router.navigate(['/']);
}

}
  ngOnInit() {
this.isauthenticated();
  }

}
