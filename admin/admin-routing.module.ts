import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CreatepostcontentComponent } from './components/createpostcontent/createpostcontent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
// superadmin guard
import { SuperadminGuard } from './auth/superadmin.guard';
import { PosttitlesComponent  } from './components/posttitles/posttitles.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PosteditComponent } from './components/postedit/postedit.component';
import { CategoryComponent } from './components/category/category.component';
import { UsersComponent} from './components/users/users.component';
import { CreateuserComponent } from './components/createuser/createuser.component';

import { SearchpostcontentComponent  } from './components/searchpostcontent/searchpostcontent.component';
import { EdituserComponent  } from './components/edituser/edituser.component';
// import { HighlightComponent } from './components/highlight/highlight.component';


const routes: Routes = 
[
{ path: 'admin/login', component: AdminloginComponent },
    { path: 'admin', component: AdminloginComponent,
      canActivate: [AuthGuard],
  children:[{ path:'',children: [
  { path: 'dashboard',component : DashboardComponent,}
   ]   }]
},
{ path: 'admin/createpost', component: CreatepostcontentComponent, canActivate: [ AuthGuard ]},
{ path: 'admin/posts', component: PosttitlesComponent, canActivate: [ AuthGuard ]},
{ path: 'admin/postdetail/:id', component: PostdetailComponent, canActivate: [ AuthGuard ]},
{ path: 'admin/postedit/:id', component: PosteditComponent, canActivate: [ AuthGuard ]},
{ path: 'admin/createcategory', component: CategoryComponent, canActivate: [ AuthGuard] },
{ path: 'admin/users', component: UsersComponent, canActivate: [ SuperadminGuard ]},
{path: 'admin/searchpostcontent', component: SearchpostcontentComponent, canActivate: [ AuthGuard ]},
{path: 'admin/users/edit/:id', component: EdituserComponent, canActivate: [ SuperadminGuard ]},
{path: 'admin/users/create', component: CreateuserComponent, canActivate: [ SuperadminGuard ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule { }


