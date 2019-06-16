import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {DataService} from "../../data.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
isDisabled = false;
  constructor(private dataService: DataService, private authService:AuthService,
    private validateService:ValidateService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private http: Http) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(12);
    console.log(this.id);

    this.dataService.averageReviews(this.id).subscribe(data => {
      if(data){
         console.log("averaged data")
      } else {
        console.log("Something went wrong");
      }
    })
    this.dataService.getTournament(this.id).subscribe(data => {
        console.log(data)
        this.documents = data;
  })
  this.dataService.getReviews(this.id).subscribe(data => {
      console.log(data)
      this.reviews = data;
  })

  }

  toggleDisabled(){
    this.isDisabled=true;
  }

  // onLinkClick(id){
  //   this.dataService.addCoordinates(id).subscribe(data => {
  //     if (data) {
  //       console.log("coordinates added")
  //     } else {
  //       console.log("something went wrong")
  //     }
  //   })
  // }


  refresh(): void {
    window.location.reload();
  }
  rateReview(id){
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      this.id = profile.user._id;
      console.log(this.id);
      this.dataService.getReview(id).subscribe(review => {
        console.log(review[0].raters.length)
        if(review[0].raters.length > 0){
          for (var i = 0; i < review[0].raters.length; i++){
            if (this.id == review[0].raters[i]){
              console.log(review[0].raters[i])
              this.flashMessage.show("You may only rate a review once",{
                cssClass: "alert-danger",
                timeout:3000
              });
              return false;
            } else {
              this.dataService.rateReview(id).subscribe(rating => {
                if(rating) {
                  console.log('review rated')
                  window.location.reload();
                } else {
                  console.log("something went wrongs")
                }
              })
            }
          }
        } else {
          this.dataService.rateReview(id).subscribe(rating => {
            if(rating) {
              console.log('review rated')
              window.location.reload();
            } else {
              console.log("something went wrongs")
            }
          })
        }
      })
    },
    err => {
      console.log(err);
      return false;
    });


  }

}
