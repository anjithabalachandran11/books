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
    var userid=this.userid;
    var pswd=this.pswd;
    var result=this.ud.login(userid,pswd)
    if(result){
      alert("Login success...");
      this.router.navigateByUrl('details');
    }
    else{
      this.router.navigateByUrl('login')
    }
  }
}