import { Component, OnInit } from '@angular/core';
import {User, SucceedInformation, Totallength } from '../../model/baseclass';
import { UserService} from '../../services/user.service';
import { timer  } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

constructor(
private	userservice: UserService

) { }
succeedinformation: SucceedInformation;
totallength: Totallength;
users: User[] = [];


// userID: number;
// userName: string;
// userFirstName: string;
// userLastName: string;
// roleName: string;
// users : User;
//
//

// List of users
getusers() {
this.userservice.getusers().subscribe(
users => {
this.users = users;
},
(err) => { console.log(err);
},
() => {
console.log('done');
}
);

}

// create user
createuser() {

}
RemoveUser(id: string) {
const timeawait = timer(400);
this.userservice.removeuser(id).subscribe(
succeedinformation => {
this.succeedinformation = succeedinformation;
if (this.succeedinformation.issucceed === true) {
timeawait.subscribe( x => {
this.printsome(0);
});
}
}
);

}


printsome(num: number) {
this.gettotallength();
this.userservice.getuserpage(num).subscribe(users => {
this.users = users;
});


}
gettotallength() {
this.userservice.totalusers().subscribe(totallength => {
this.totallength = totallength;
}
);
}

  ngOnInit() {
  // this.gettotallength();
this.printsome(0);
  }
}
