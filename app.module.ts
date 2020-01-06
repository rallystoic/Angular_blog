import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PosttitleComponent } from './component/posttitle/posttitle.component';
import { PostdetailComponent } from './component/postdetail/postdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// material
import { MatSelectModule } from '@angular/material/select';
import { QuillModule } from 'ngx-quill';

// import moudle
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PosttitleComponent,
    PostdetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
QuillModule.forRoot(),
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
