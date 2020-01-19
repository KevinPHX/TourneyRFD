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
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportcontent: String;
  constructor(private dataService: DataService, private authService:AuthService,
    private validateService:ValidateService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private http: Http) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(8);
    console.log(this.id);
    this.dataService.getReview(this.id).subscribe(review => {
      console.log(review)
      this.documents = review;
    })
  }
  onReportSubmit(){
    const report = {
      reportcontent: this.reportcontent,
    }
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(8);
    console.log(this.id);

    if (report.reportcontent == undefined || report.reportcontent == ''){
      this.flashMessage.show("Please provide your reason for reporting this review", {cssClass:'alert-danger', timeout:3000});
      return false
    }

    this.dataService.reportReview(report, this.id).subscribe(data => {
      if (data) {
        this.flashMessage.show("Your report has been sent", {cssClass:'alert-success', timeout:3000})
        this.router.navigate(['/review/' + this.id])
      } else {
        this.flashMessage.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
      }
    })

  }
}
