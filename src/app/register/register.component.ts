import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { UserserviceService } from '../service/userservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users=new User(1,"","","","","");

  user:Users ;
  msg:string;
  isNew:boolean;

 constructor(
   private userService:UserserviceService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
     if(id){
       this.isNew=false;
       this.userService.getById(id).subscribe(
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
      ob = this.userService.add(this.user);
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
