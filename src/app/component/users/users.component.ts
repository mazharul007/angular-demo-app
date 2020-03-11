import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  showExtended: boolean = false;
  loaded : boolean = false;
  enableAdd :boolean= true;
  currentClasses:{};
  currentStyles:{};
  constructor() { }

  ngOnInit(){
    setTimeout(()=>{
      this.users=[

        {
          firstName:"John",
          lastName:"Doe",
          nickName :"Alleen",
          age:30,
          userAddress:{
            street:"206/3/A Rayer Bazar, Dhaka -1209",
            city:'Dhaka',
            postalCode:1209
          },
          image:"http://lorempixel.com/600/600/people/3",
          isActive:true
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
          },
          image:"http://lorempixel.com/600/600/people/3",
          isActive:true
        },
        {
          firstName:"Mark",
          lastName:"Stoinis",
          nickName :"Zampa",
          age:28,
          userAddress:{
            street:"206/3/A Rayer Bazar, Aus -11209",
            city:'Aus',
            postalCode:1209
          },
          image:"http://lorempixel.com/600/600/people/3",
          isActive:true
        }
      ];
      this.addUser(
        {
          firstName:"Mr.",
          lastName:"Kudvenkat",
          nickName :"Chakrabarti",
          age:38,
          userAddress:{
            street:"205 Dhanmondi-12073",
            city:'Dhaka',
            postalCode:1207
          },
          image:"http://lorempixel.com/600/600/people/3",
          isActive:true
        }
      );

      this.loaded = true;
    },2000);
    
    this.setCurrentClasses();
     //this.showExtended = false;
    this.setCurrentStyles();
  }  

     //addUser Method
     addUser(user:User){
      this.users.push(user)
    }

    setCurrentClasses(){
      this.currentClasses={
        'btn-primary':this.enableAdd,
        'big-text': this.showExtended
      }
    }

    setCurrentStyles(){
      this.currentStyles={
        'padding-top' : this.showExtended ? '0' :'100px'
      }
    }
   
}
