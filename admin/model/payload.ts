// Collection of class to be use for JSON RESPONSE 
// 
// SucceedInformation
// postpayload
//updatepayload
//removepayload
//postdetailfull
//authpayload
//authcontext
//
//
//
//
//


//this class use for validate HttpResponse from a server rest api
// return ok (SucceedInformation);
export class SucceedInformation
{
	issucceed : boolean;
	succeedDetail : string; 
}

//this class is for  createpostcontent
export class Postpayload
{
	PostTitle : string;
	ContentDetail  : string;
	CategoryID   : number;
	UserID  : number;
}


//this class is for  updatepostcontent
export class Updatepayload
{
	PostID : number;
	PostTitle  : string;
	contentDetail  : string;
	CategoryID   : number;

}




//this class is for removepostcontent
//
export class Removepayload
{
	id : number;
}




//this class is for getpostcontent
export class Postdetailfull
{
	postID : number;
	postTitle : string;
	contentDetail : string;
	postedDateTime : string;
	userFirstName : string;
	userLastName : string;
	categoryID : number;
	categoryName : string;
}



// this class is for authentication
export class Authpayload
{
	rname: string;
	rpassword : string;
}


//this class  has to be use after being Authenticated
export class Authcontext
{
	isSucceed : boolean;
	userID: string;
	token: string;
	firstname : string;
	lastname : string;
}
