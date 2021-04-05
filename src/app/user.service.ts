import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { environment } from '../environments/environment';

@Injectable({providedIn:'root'})
export class UserService{


    constructor(private http:HttpClient){}

    OnInit(){}

    createUser(user:User){
        return this.http.post<User>( environment.host + '/create/user', user );
    }

    findUser(email:string){
        return this.http.get<User>(environment.host + '/find/user/' + email);
    }

    loginUser(email:string, password:string){
        return this.http.get<User>(environment.host + '/find/user/login/' + email + "/"+ password);
    }

}