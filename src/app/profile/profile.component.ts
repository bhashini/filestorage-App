import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() uname:string = "";
  
  email:string="";
  password:string="";
  name:string="";
  userdetails:User;

  constructor(private userservice:UserService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this._Activatedroute.queryParams
            .subscribe(params => {
                                    this.uname = params['uname'];
                                });
    console.log("profile OnInit uname: "+this.uname);

    this.loadProfile();

  }

private loadProfile(){
    this.userservice.findUser(this.uname).subscribe(user => { 
                                                          this.userdetails = user;
                                                          console.log("User Details "+this.userdetails);
                                                          this.email = this.userdetails.email;
                                                          this.password = this.userdetails.password;
                                                          this.name = this.userdetails.name;
                                                         });
                                                         

}

}
