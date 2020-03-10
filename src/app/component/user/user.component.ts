import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    user:User;
    
    constructor() {
    }
    ngOnInit(){
      this.user={
        firstName:"John",
        lastName:"Doe",
        nickName :"Alen",
        age:30,
        userAddress:{
          street:"206/3/A Rayer Bazar, Dhaka -1209",
          city:'Dhaka',
          postalCode:1209
        }
      }
      console.log('loading.....'); // test purpose
    }


}



