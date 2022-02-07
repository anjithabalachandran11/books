import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  loginform=new FormGroup({
    userid: new FormControl('',Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')])),
    pswd: new FormControl('',Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9@]*")])),
  })
  ngOnInit(): void {
  }

  loginfun(){
    var userid=this.loginform.value.userid;
    var pswd=this.loginform.value.pswd;
    var result=this.ud.login(userid,pswd)
    console.log(userid,pswd)
    if(this.loginform.valid){
      if(result){
        alert("Login success...");
        this.router.navigateByUrl('details');
      }
      else{
        this.router.navigateByUrl('login')
      }
    }
    else{
      alert("Invalid inputs!!")
    }
  }
}