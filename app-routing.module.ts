import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosttitleComponent } from './component/posttitle/posttitle.component';
import { PostdetailComponent } from './component/postdetail/postdetail.component';

const routes: Routes =
[
 { path: '', redirectTo: '/Post', pathMatch: 'full'},
 { path: 'Post', component: PosttitleComponent},
 { path: 'postdetail/:id', component: PostdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
