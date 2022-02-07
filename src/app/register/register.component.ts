import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private ud:UserdataService, private fb:FormBuilder) { }
  userid : any
  name=""
  email=""
  pswd=""
  regform=new FormGroup({
    userid:new FormControl('',Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')])),
    name:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]*")])),
    email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
    pswd:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9@]*")])),

  })
  ngOnInit(): void {
  }

  registerfun(){
    var userid=this.regform.value.userid;
    var name=this.regform.value.name;
    var email=this.regform.value.email;
    var pswd=this.regform.value.pswd;
    var result=this.ud.register(userid,name,email,pswd)
    console.log(this.ud.user)
    if(this.regform.valid){
      if(result){
        alert("Registration success...");
        this.router.navigateByUrl('login')
      }
      else{
        alert("User already exist please login!!!")
      }
    }
    else{
      alert("invalid form")
      this.router.navigateByUrl('register')
    }
    
  }


}
