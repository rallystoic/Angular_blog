import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor() { }
Islogged = false;
Isadmin = false;
logbtn = true;
outbtn = false;
token: string = window.localStorage.getItem('token');
isauthenticated() {
if (this.token !== null) {
this.logbtn = false;
this.outbtn = true;
this.Islogged = true;
}

}
isadmin() {
const rolestorage = window.localStorage.getItem('role');
if (rolestorage === 'administrator') {
this.Isadmin = true;
} else if (rolestorage !== 'administrator') {
this.Isadmin = false;
}
}
logout() {
// this.loginbtncdn = true;
const Isconfirm: boolean = window.confirm('do you want to log out');
if (Isconfirm === true) {
this.logbtn = true;
window.localStorage.clear();
this.outbtn = false;
// window.location.reload();
}
}
ngOnInit() {
this.isauthenticated();
this.isadmin();
}


}
