import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private ud:UserdataService) { }
  userid : any
  name=""
  email=""
  pswd=""
  ngOnInit(): void {
  }

  registerfun(){
    var userid=this.userid;
    var name=this.name;
    var email=this.email;
    var pswd=this.pswd
    var result=this.ud.register(userid,name,email,pswd)
    console.log(this.ud.user)
    if(result){
      alert("Registration success...");
      this.router.navigateByUrl('login')
    }
    else{
      alert("User already exist please login!!!")
    }
    
  }


}
