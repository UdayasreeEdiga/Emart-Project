import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../model/users';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
 
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
    }
  }
}
