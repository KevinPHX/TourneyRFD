import { Injectable, OnInit } from '@angular/core';
import { Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService implements OnInit {
  user:Object;
  username:String;
  constructor(private http: Http, private authService: AuthService, private router: Router) {
    console.log('Data Service Initialized...');
    this.user;
    this.username;
  }
  retrieveProfile(){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.username);
      this.username;
      return this.http.get('http://localhost:3000/users/nearby/' + this.username).map(res => res.json());
    })
  }
   ngOnInit() {
     this.retrieveProfile().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
   }


   }
