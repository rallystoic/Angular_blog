export class postpayload
{
	PostTitle : string;
	ContentDetail : string;
	CategoryID : number;
	UserID : number;
}

export class  message
{
	iscreated : boolean;
}



/*return postcontentdetail with
 *overload parameter from jsondata
 */
export class category
{
	categoryID : number;
	categoryName : string;
}


export class postdetailfull
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

// json response for postdetail
export class Postdetail{
	postid: number;
	posttitle: string;
	contentdetail: string;
	posted: string;
}



export class updatepayload
{
	PostID : number;
	PostTitle  : string;
	contentDetail  : string;
	CategoryID   : number;
}


export class SucceedInformation
{
	issucceed : boolean;
	succeedDetail : string; 
}


// for authentication
export class authpayload
{
	rname: string;
	rpassword : string;
}

// authentication 
export class authcontext
{
	isSucceed : boolean;
	userID: string;
	token: string;
	firstname : string;
	lastname : string;
	role:string;
}



