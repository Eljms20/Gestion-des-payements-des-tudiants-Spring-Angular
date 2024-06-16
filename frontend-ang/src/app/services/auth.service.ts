import { Injectable } from '@angular/core';
import {flatMap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users:any ={
    admin :{password :'1234', roles:['STUDENTS','ADMIN']},
    user1 :{password :'1234', roles:['STUDENTS']}
}
public username:any;
  public isAuthenticated:boolean=false;
  public roles:string[]=[];
  constructor( private router:Router) { }
  public login(username:string,password:string) :boolean
  {
    if(this.users[username] && this.users[username]['password'] ==password)
    {
      this.username=username;
      this.isAuthenticated=true;
      this.roles=this.users[username]['roles'];
      return true;
    }
    else
    {return false
    }

  }

  logout() {
    this.username=undefined;
    this.isAuthenticated=false;
    this.roles=[];
    this.router.navigateByUrl("/login");
  }
}