import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public details:any=[];
  public deldata: any=[]

  constructor(private router:Router, private ds: UserdataService, private http: HttpClient){
      this.ds.getDetails().subscribe(datas =>{
        console.log(datas)
        this.details=datas
      })

     
      

  } 

  deleteData(data:any){
    console.log(data)
    this.http.delete('https://jsonplaceholder.typicode.com/posts/' +data.id).subscribe(result =>{
      let index = this.details.indexOf(data)
      this.details.splice(index,1)
    })
  }

  

  
    
  ngOnInit(): void {
  }

  
}
