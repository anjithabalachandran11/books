import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router, private ud:UserdataService) { }
  userid : any
  pswd=""
  ngOnInit(): void {
  }

  loginfun(){
    let userDetails=this.ud.user;
    var id=this.userid;
    var pswd=this.pswd;
    console.log(this.ud.user)
    if(id in userDetails){
      if(userDetails[id].pswd==pswd){
        alert("Login success...");
        this.router.navigateByUrl('details');
      }
      else{
        alert("Invalid password!!");
        this.router.navigateByUrl('login');
      }
    }
    else{
      alert("Invalid user id!!!");
      this.router.navigateByUrl('login')
    }
  }

}
