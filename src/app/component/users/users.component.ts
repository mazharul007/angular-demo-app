import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    nickName: '',
    age: null,
    userAddress: {
      street: '',
      city: '',
      postalCode: null
    },
    joinedDate: '',
    companyName: ''
  }
  users: User[];
  showExtended: boolean = true;
  // loaded : boolean = false;
  enableAdd: boolean = false;
  currentClasses: {};
  currentStyles: {};
  toggleClass: {};
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [

      {
        firstName: "John",
        lastName: "Doe",
        nickName: "Alleen",
        age: 30,
        userAddress: {
          street: "206/3/A Rayer Bazar, Dhaka -1209",
          city: 'Dhaka',
          postalCode: 1209
        },
        // image:"http://lorempixel.com/600/600/people/3",
        isActive: true,
        // balance:100,
        joinedDate: new Date('01/03/2020'),
        gender: 'Male',
        hide: true,
        companyName: 'GOOGLE'
      },
      {
        firstName: "Alex",
        lastName: "Dolan",
        nickName: "Ricky",
        age: 20,
        userAddress: {
          street: "206/3/A Rayer Bazar, NY -1209",
          city: 'NY',
          postalCode: 1209
        },
        
        isActive: true,
       
        joinedDate: new Date('01/03/2020'),
        gender: 'Male',
        hide: true,
        companyName: 'Microsoft'
      },
      {
        firstName: "Mark",
        lastName: "Stoinis",
        nickName: "Zampa",
        age: 28,
        userAddress: {
          street: "206/3/A Rayer Bazar, Aus -11209",
          city: 'Aus',
          postalCode: 1209
        },
       
        isActive: true,
        
        joinedDate: new Date('08/01/2020'),
        gender: 'Male',
        hide: true,
        companyName: 'FACEBOOK'
      }
    ];


    this.setCurrentClasses();

    this.setCurrentStyles();
  }


  setCurrentClasses() {
    this.currentClasses = {
      'btn-primary': this.enableAdd,
      'big-text': this.showExtended
    }
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-bottom': this.showExtended ? '0px' : '50px',
      'font-size': this.showExtended ? '10px' : '20px',
      'color': this.showExtended ? 'maroon' : 'forestgreen'
    }
  }


  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

  addUser() {
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.joinedDate = new Date();
    this.user = {
      firstName: '',
      lastName: '',
      nickName: '',
      age: null,
      userAddress: {
        street: '',
        city: '',
        postalCode: null
      },
      joinedDate: ''
    }
  }
}


