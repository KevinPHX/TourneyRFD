import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {DataService} from "../../data.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import {Data} from "../../Data";

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditreviewComponent implements OnInit {
  judgingpool: Integer;
  accomodations: Integer;
  location: Integer;
  scheduling:Integer;
  overall:Integer;
  content:String;
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
    this.dataService.getReview(this.id).subscribe(review => {
      console.log(review)
      this.judgingpool = review[0].judgingpool;
      this.accomodations = review[0].accomodations;
      this.location = review[0].location;
      this.scheduling= review[0].scheduling;
      this.overall= review[0].overall;
      this.content= review[0].content;
      this.tournamentname = review[0].tournamentname
    },
    err => {
      console.log(err);
      return false;
    });
  }

  editReview(){
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(12);
    console.log(this.id);
    const review = {
      judgingpool: this.judgingpool,
      accomodations: this.accomodations,
      location: this.location,
      scheduling: this.scheduling,
      overall: this.overall,
      content: this.content
    };

    console.log(review.judgingpool)
    if (review.judgingpool == undefined || review.accomodations == undefined || review.location == undefined || review.scheduling == undefined || review.overall == undefined || review.content == ''){
      this.flashMessage.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
      return false
    }
    console.log(review)
    this.dataService.editReview(review, this.id).subscribe(data => {
      if(data){
         this.flashMessage.show("Successfully edited review", {cssClass:'alert-success', timeout:3000});
          this.router.navigate(['/dashboard'])
      } else {
        this.flashMessage.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
      }
    })
    this.router.navigate(['/dashboard'])
  }



}
