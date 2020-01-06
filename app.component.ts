import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject,of } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
	    private router : Router)
	{}
    condi : boolean  ;
    loginbtncdn : boolean;
    API_URL : string;
	
    logout()
    {
        //this.loginbtncdn = true;
	 const Isconfirm : boolean =    window.confirm("do you want to log out");
	    if (Isconfirm === true)
	{
		
    this.condi = false;
		window.localStorage.clear();
		window.location.reload();
	}
    }
    login()
    {
        this.condi  = true;
        this.loginbtncdn = false;
        
    }
	
    
    token : string = window.localStorage.getItem("token");
    checktoken()
    {
        if(this.token === null)
        {
            console.log("logout");
            this.condi = false;
        }
        else if(this.token !== null)
        {
            console.log("log in");
            this.condi = true;
        }
        
    }
ngOnInit()
{
        this.checktoken();
    }

}
