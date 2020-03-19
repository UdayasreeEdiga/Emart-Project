import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sellerser } from '../service/sellerser';

@Component({
  selector: 'app-sregistration',
  templateUrl: './sregistration.component.html',
  styleUrls: ['./sregistration.component.css']
})
export class SregistrationComponent implements OnInit {

  user:Users ;
  msg:string;
  isNew:boolean;

 constructor(
    private sellerService:Sellerser,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
     if(id){
       this.isNew=false;
       this.sellerService.getById(id).subscribe(
         (data)=>{
          this.user=data;
        }
      );
    }else{
      this.isNew=true;
      this.user={
        id:0,
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    mobileno:"",

      };
    }
  }
  save() {
    let ob: Observable<Users>;

    if (this.isNew) {
      ob = this.sellerService.add(this.user);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }


}
