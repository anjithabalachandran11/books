import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  user:any={
    1001:{userid:1001,name:'abc',email:'abc@gmail.com',pswd:'abc@'},
    1002:{userid:1002,name:'def',email:'def@gmail.com',pswd:'def@'},
    1003:{userid:1003,name:'ghi',email:'ghi@gmail.com',pswd:'ghi@'},
  };

  register(userid:any,name:any,email:any,pswd:any){
    let userDetails=this.user;

    if(userid in userDetails){
      return false;
    }
    else{
      userDetails[userid]={
        userid,
        name,
        email,
        pswd
      }
      return true;
    }

  }


}
