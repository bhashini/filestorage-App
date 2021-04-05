import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FilesComponent } from './files/files.component';
import { TagsComponent } from './tags/tags.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

const routes: Routes = [
    { path: 'signup' , component : SignupComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'home' , component : HomeComponent, children : [
              { path: 'files' , component: FilesComponent },
              { path: 'tags' , component: TagsComponent },
              { path: 'uploadfile' , component: UploadfileComponent },
              { path: 'profile' , component: ProfileComponent }   
     ] }
    
    
    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
