import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  constructor(private http: HttpClient ) {}
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

  login(userid:any,pswd:any){
    let userDetails=this.user;
    console.log(this.user)
    console.log(userid)
    if(userid in userDetails){
      if(userDetails[userid].pswd==pswd){
        return true
      }
      else{
        alert("Invalid password!!");
        return false
      }
    }
    else{
      alert("Invalid user id!!!");
      return false;
    }
  }

  getDetails(){
    let url='https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url)
  }

  // getDetails() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }
  




  /**
   * Api to retreve employee report based on email id
   * @param data object
   */
//     getEmployeeCOReport(data: any) {
//       return this.http.post(${environment.apiUrl}/leave/compoff/report, data, {responseType: 'json'});
// }
 }
