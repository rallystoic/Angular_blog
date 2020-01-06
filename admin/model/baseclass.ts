// Collection of class to be use for JSON RESPONSE and payload

// SucceedInformation
// postpayload
// updatepayload
// removepayload
// postdetail
// authpayload
// Category
// authcontext
// posttitle
// Category
// Categorypayload (for creating a new )
// User
//
// //


// this class use for validate HttpResponse from a server rest api
// return ok (SucceedInformation);
export class SucceedInformation {
issucceed: boolean;
succeedDetail: string;
}
// this class is for creating a new categoryName
export class CategoryPayload {
CategoryName: string;
}


// this class is for  createpostcontent
export class Postpayload {
PostTitle: string;
ContentDetail: string;
CategoryID: number;
UserID: number;
}


// this class is for  updatepostcontent
export class Updatepayload {
PostID: number;
PostTitle: string;
contentDetail: string;
CategoryID: number;

}
// this class is for category Jsonresponse
export class Category {
categoryid: number;
categoryname: string;
}


// this class is for removepostcontent
export class Removepayload {
id: number;
}




// this class is for getpostcontent
// export class Postdetail {
// postID: number;
// postTitle: string;
// contentDetail: string;
// postedDateTime: string;
// userFirstName: string;
// userLastName: string;
// categoryID: number;
// categoryName: string;
// }
// this calss is for json response of postdetail
export class Postdetail {
postid: number;
posttitle: string;
contentdetail: string;
posted: string;
categoryid: number;
categoryname: string;
}



// this class is for authentication
export class Authpayload {
rname: string;
rpassword: string;
}


// this class  has to be use after being Authenticated
export class Authcontext {
isSucceed: boolean;
userID: string;
token: string;
firstname: string;
lastname: string;
}

export class Posttitle {
postid: number;
posttitle: string;
titleimurl: string;
posted: string;
}



// this class is use for json response
export class User {
userid: number;
username: string;
userfirstname: string;
userlastname: string;
rolename: string;
}


// this class is use for creating a new user
// payload
export class UserPayload {
username: string;
password: string;
userfirstname: string;
userlastname: string;
}
//
//
// posttile without time
export class PostList {
PostID: number;
PostTitle: string;
}

export class TotalPosTitle {
total: number;
post: PostList[];
}
// changing firstname and lastname
export class UserUpdatePayload {
userid: number;
userfirstname: string;
userlastname: string;
password: string;
}

export class Totallength {
total: number;
}



export class Nest {
name: string;
postlist: PostList[];
status: number;
}



// posttile in table cell format
// export class PosttitleTable {
// postID: number;
// postTitle: string;
// userFirstName: string;
// userLastName: string;
// categoryName: string;
// postedDateTime: string;
// }
export class PosttitleTable {
postid: number;
posttitle: string;
userfirstname: string;
userlastname: string;
categoryname: string;
posted: string;

}


// username and password for authentication
export class Challengepayload {
rname: string;
rpassword: string;
}

// after being authenticated
export class Validateinformation {
isSucceed: boolean;
userID: number;
token: string;
firstname: string;
lastname: string;
role: string;
}

export class Highlight {
postid: number;
posttitle: string;
}





