import { Component, OnInit,Input } from '@angular/core';
import { Category,SucceedInformation} from '../../model/baseclass';
import { PostcontentService} from '../../services/postcontent.service';


@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {

	constructor(
	private postcontent : PostcontentService
	) { }
succeedinformation : SucceedInformation;
updatecategory = new Category();
@Input() category: Category;

alertmsg : string;

//@Input() showcontext : ShowContext;
	// this function send reqest to edit
	// Categoryname
	Update()
	{
		this.updatecategory.categoryid = this.category.categoryid;
		this.updatecategory.categoryname = this.category.categoryname;
		console.log("fire!");
		this.postcontent.updatecategory(this.updatecategory).subscribe(
			succeedinformation =>
			{
			this.succeedinformation = succeedinformation;
				if(this.succeedinformation)
				{
				this.alertmsg = "done , refresh button to see new change";	
				}
			}
		);
		
	}

	
  ngOnInit() {

  }

}
