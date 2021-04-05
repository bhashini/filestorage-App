import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component'


import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'filestorage-app';
  msg:string = "";
  uname:string = "abc";
  pword:string;
  
  constructor(private router:Router, private sign:SignupComponent, private userService:UserService) {
    this.sign.enable = false;
   }

   username(event:any){
      this.uname = (<HTMLInputElement>event.target).value;    
   }

   password(event:any){
    this.pword = (<HTMLInputElement>event.target).value;
   }

 onLogin():void{
    this.userService.loginUser(this.uname,this.pword).subscribe(user => {
      
                                          console.log(user);
                                          if(user == null)
                                          {
                                            console.log("Username and Password mismatch");
                                            this.msg = "Username and Password mismatch";
                                          }
                                          else 
                                          {
                                            console.log("In Home");
                                            this.router.navigate(['/home'],{ queryParams: { uname : user.email}});
                                          }
                                          
                                        });

    
  }
  
  
  ngOnInit(): void {
  }

}
