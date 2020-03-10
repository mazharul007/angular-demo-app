import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  showExtended: boolean = true;
  loaded : boolean = false;

  constructor() { }

  ngOnInit(){
    setTimeout(()=>{
      this.users=[

        {
          firstName:"John",
          lastName:"Doe",
          nickName :"Alen",
          age:30,
          userAddress:{
            street:"206/3/A Rayer Bazar, Dhaka -1209",
            city:'Dhaka',
            postalCode:1209
          }
        },
        {
          firstName:"Alex",
          lastName:"Dolan",
          nickName :"Ricky",
          age:20,
          userAddress:{
            street:"206/3/A Rayer Bazar, NY -1209",
            city:'NY',
            postalCode:1209
          }
        },
        {
          firstName:"Mark",
          lastName:"Stoinis",
          nickName :"Zampa",
          age:28,
          userAddress:{
            street:"206/3/A Rayer Bazar, Aus -1209",
            city:'Aus',
            postalCode:1209
          }
        }
      ];
      this.addUser(
        {
          firstName:"Mr.",
          lastName:"Kudvenkat",
          nickName :"Chakrabarti"
        }
      );

      this.loaded = true;
    },2000);
    
     //this.showExtended = false;
  }  

     //addUser Method
     addUser(user:User){
      this.users.push(user)
    }

   
}
