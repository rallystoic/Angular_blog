import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {   httpInterceptorProviders } from './http-interceptors/index';
import { adminRoutingModule  } from './admin-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { CreatepostcontentComponent } from './components/createpostcontent/createpostcontent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PosttitlesComponent } from './components/posttitles/posttitles.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PosteditComponent } from './components/postedit/postedit.component';
import { QuillModule } from 'ngx-quill';
import { CategoryComponent } from './components/category/category.component';
import { CategorydetailComponent } from './components/categorydetail/categorydetail.component';
import { UsersComponent } from './components/users/users.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { SearchpostcontentComponent } from './components/searchpostcontent/searchpostcontent.component';

// material
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { EdituserComponent } from './components/edituser/edituser.component';
import { HighlightComponent } from './components/highlight/highlight.component';

@NgModule({
declarations: [
AdminloginComponent,
CreatepostcontentComponent,
DashboardComponent,
PosttitlesComponent,
PostdetailComponent,
PosteditComponent,
CategoryComponent,
CategorydetailComponent,
UsersComponent,
CreateuserComponent,
SearchpostcontentComponent,
EdituserComponent,
HighlightComponent
],
    imports: [
    CommonModule,
    HttpClientModule,
    adminRoutingModule,
	    FormsModule,
	    MatSelectModule,
	    MatPaginatorModule,
    ReactiveFormsModule,
	    QuillModule.forRoot()
    ],
  exports: [
],
providers :
[
httpInterceptorProviders
]
})
export class AdminModule { }
