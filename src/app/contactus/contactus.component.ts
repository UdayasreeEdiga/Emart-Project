import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact: Contact;
  msg:string;
  isNew:boolean;

  constructor(private contactService:ContactService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {let email=this.actRoute.snapshot.params.email;
    if(email){
      this.isNew=false;
      this.contactService.getById(email).subscribe(
        (data)=>{
         this. contact=data;
       }
     );
   }else{
     this.isNew=true;
     this. contact={
       id:0,
   firstName:"",
   lastName:"",
   email:"",
  comment:""
   

     };
   }
 }
 save() {
   let ob: Observable<Contact>;

   if (this.isNew) {
     ob = this.contactService.add(this.contact);
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



