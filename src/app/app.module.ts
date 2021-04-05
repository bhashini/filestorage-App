import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FilesComponent } from './files/files.component';
import { TagsComponent } from './tags/tags.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FilesComponent,
    TagsComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    UploadfileComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
    
  ],

  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
