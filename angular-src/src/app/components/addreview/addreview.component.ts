import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';
import{DataService} from "../../data.service";

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  judgingpool: Integer;
  accomodations: Integer;
  location: Integer;
  scheduling:Integer;
  overall:Integer;
  content:String;
  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router, private dataService:DataService) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(11);
    console.log(this.id);
    this.dataService.getTournament(this.id).subscribe(data => {
        console.log(data)
        this.documents = data;
  })
  }

  onReviewSubmit(){
    const review = {
      judgingpool: this.judgingpool,
      accomodations: this.accomodations,
      location: this.location,
      scheduling: this.scheduling,
      overall: this.overall,
      content: this.content,
    }
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(11);
    console.log(this.id);
    if(review.judgingpool == undefined || review.accomodations == undefined || review.location == undefined || review.scheduling == undefined || review.overall == undefined || review.content == undefined || review.content == "" ){
      this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
      return false
    }

    this.dataService.getUserReviews().subscribe(reviews => {
      for(var i = 0; i < reviews.length; i++){
        if (reviews[i].tournament ==  this.id){
          this.flashMessages.show("You may not review a tournament more than once. You may edit your previous review for this tournament", {cssClass:'alert-danger', timeout:3000});
          return false;
        }
      }

      this.dataService.addReview(review, this.id).subscribe(data => {
        if(data){
           this.flashMessages.show("Successfully added review", {cssClass:'alert-success', timeout:3000});
            this.router.navigate(['/tournament/', this.id]).then(() => {
              window.location.reload();
            })
        } else {
          this.flashMessages.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
        }
      })
    })


  }



}
