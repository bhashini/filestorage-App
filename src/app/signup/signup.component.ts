import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  title = 'filestorage-app';
  enable: boolean = true;
  loadedUser:User = <User>{};
  findUseremail:string;
  newUser:User = <User>{};
  username:string="";
  userAvaibality:string="";
  exits:Boolean = false;

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  onUsersAvailability(event:any){
    this.userAvaibality=""
    this.username = (<HTMLInputElement>event.target).value;
    this.userService.findUser(this.username).subscribe(user => {
                                             if(user != null)
                                             {
                                               this.userAvaibality = "User Name is already exits.Please Login";                           
                                             }   
                                            });
  }
 
  
  onSubmit(user:User){
  this.userService.createUser(user).subscribe(user =>{
                                              this.newUser = user;     
                                              if(this.newUser == null)
                                              {
                                                this.exits = true;
                                              }
                                              
                                                
                                                this.router.navigate(['/login']);
                                                this.enable = false;
                                              
                                      })   
                                        
  }

  onLogin(){
    this.enable = false;
  }
 
}
