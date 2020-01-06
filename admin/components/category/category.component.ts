import { Component, OnInit } from '@angular/core';
import { PostcontentService } from '../../services/postcontent.service';
import { SucceedInformation, Category, CategoryPayload} from '../../model/baseclass';
import { FormControl } from '@angular/forms';
import { timer  } from 'rxjs';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

constructor(
private postcontent : PostcontentService

){

}
inputcondi: boolean =false ;

categories: Category[]=[];
succeedinformation:  SucceedInformation;
inputcategory: string;
categorypayload = new CategoryPayload();
alertmsg: string;

// displayedColum
// and data
//fetch categories
//displayedColumns: string[] = ['categoryID','categoryName'];
//const dataSource = this.categories;
getCategories() {
this.postcontent.getCategory().subscribe(categories =>
{
this.categories = categories;
}
);	
}
//Create categories
createcategory()
{

if(this.inputcategory.length <0)
{
	this.alertmsg = "please insert";
	//this.inputcondi = true;
}
else if(this.inputcategory.length > 0)
{
this.alertmsg = "";
this.inputcondi = false;
console.log("test");
this.categorypayload.CategoryName = this.inputcategory.toLowerCase();
this.postcontent.createCategory(this.categorypayload).subscribe(succeedinformation =>
{
this.succeedinformation = succeedinformation;
if(this.succeedinformation.issucceed) {
// if an object is created wait 1 sec and request to fetch 
// a collection of categories
const timeawait = timer(1000);
timeawait.subscribe(x => this.getCategories());	
}
}
);
}

}




//remove_Category

removeCategory(id : string)
{
	const result = window.confirm("do you want to remove");
	if(result)
	{
		this.postcontent.removecategory(id).subscribe(succeedinformation =>
			{
				this.succeedinformation = succeedinformation;
				if(this.succeedinformation.issucceed)
				{
					this.getCategories();
				}
			}

		);	
	}
}

//show category on child component
selected : Category;
Isshow : boolean  ;
category : Category;
onSelect(category : Category)
{
	this.category = category;
	this.Isshow = true;
}


//cancel and hide 
cancel()
{
	this.Isshow = false;
	this.getCategories();
}

// this function send reqest to edit
// Categoryname
updatecategory = new Category();
Update()
{
	this.updatecategory.categoryid = this.category.categoryid;
	this.updatecategory.categoryname = this.category.categoryname;
	// console.log("fire!");
	this.postcontent.updatecategory(this.updatecategory).subscribe(
		succeedinformation =>
		{
		this.succeedinformation = succeedinformation;
			if(this.succeedinformation)
{
this.Isshow = false;
}
}
);

}


  ngOnInit() {
  this.getCategories();
  }

}


