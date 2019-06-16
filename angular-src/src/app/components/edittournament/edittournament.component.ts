import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';
import{DataService} from "../../data.service";
import { Http, Response} from "@angular/http";
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-edittournament',
  templateUrl: './edittournament.component.html',
  styleUrls: ['./edittournament.component.css']
})
export class EdittournamentComponent implements OnInit {
  name:String;
  startdate: Date;
  enddate: Date;
  eventswithbids: [Object];
  bidrounds: [Object];
  eventswithoutbids: [Object];
  // eventswithbids = [{value: ''}];
  // bidrounds = [{value: ''}];
  // eventswithoutbids = [{value: ''}];
  screws:String;
  link: String;
  address: String;
  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router, private dataService:DataService, private http:Http) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(16);
    console.log(this.id);
    this.dataService.getTournament(this.id).subscribe(tournament => {
      console.log(tournament)
      this.name = tournament[0].name;
      this.startdate = tournament[0].startdate;
      this.enddate = tournament[0].enddate;
      this.eventswithbids= tournament[0].eventswithbids;
      this.bidrounds= tournament[0].bidrounds;
      this.eventswithoutbids= tournament[0].eventswithoutbids;
      this.screws= tournament[0].screws;
      this.link= tournament[0].link;
      this.address= tournament[0].address;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  refresh(): void {
    window.location.reload();
  }
  editTournament(){
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(16);
    console.log(this.id);
    const tournament = {
      name: this.name,
      startdate: this.startdate,
      enddate: this.enddate,
      eventswithbids: this.eventswithbids,
      bidrounds: this.bidrounds,
      eventswithoutbids: this.eventswithoutbids,
      screws: this.screws,
      link: this.link,
      address: this.address,
      }
      if(!this.validateService.validateTournament(tournament)){
        this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      if (this.link.substring(0,23) != "https://www.tabroom.com") {
        this.flashMessages.show("Please use the Tabroom link", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      for(var i = 0; i < tournament.eventswithbids.length; i++){
        if (tournament.eventswithbids[i].value == "" || tournament.bidrounds[i].value == "") {
          this.flashMessages.show("Please fill in Events with Bids and Bid Rounds or remove empty fields", {cssClass:'alert-danger', timeout:3000});
          return false
        }
      }
      for(var i = 0; i < tournament.eventswithoutbids.length; i++){
        if (tournament.eventswithoutbids[i].value == "") {
          this.flashMessages.show("Please fill in Events without Bids or remove empty fields", {cssClass:'alert-danger', timeout:3000});
          return false
        }
      }

      this.dataService.editTournament(this.id, tournament).subscribe(data => {
        console.log("editTournament")
        console.log(data)
        if(data){
           this.flashMessages.show("Successfully edited tournament", {cssClass:'alert-success', timeout:3000});
          this.router.navigate(['/dashboard'])
        } else {
          this.flashMessages.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
           this.router.navigate(['/edittournament/'+this.id])
        }
      });
      this.router.navigate(['/tournament/', this.id])
      .then(() => {
        window.location.reload();
      });

  }


  add() {
    for (var i = 0; i < this.eventswithbids.length; i++){
      var event = this.eventswithbids[i].value
      this.eventswithbids.splice(i, 1, {value: event});
    }
    this.eventswithbids.splice(this.eventswithbids.length, 1, {value: ""});
    console.log(this.eventswithbids)
  }
  addbidrounds() {
    for (var i = 0; i < this.bidrounds.length; i++){
      var round = this.bidrounds[i].value
      this.bidrounds.splice(i, 1, {value: round});
    }
    this.bidrounds.splice(this.bidrounds.length, 1, {value: ''});
  }
  addwithoutbids() {
    for (var i = 0; i < this.eventswithoutbids.length; i++){
      var withoutbid = this.eventswithoutbids[i].value
      this.eventswithoutbids.splice(i, 1, {value: withoutbid});
    }
    this.eventswithoutbids.splice(this.eventswithoutbids.length, 1, {value: ''});
  }
  remove(index){
    console.log("REMOVE INDEX"+index)
    this.eventswithbids.splice(index, 1);
    this.bidrounds.splice(index, 1);

    console.log("REMOVE LENGTH"+this.eventswithbids.length)

  }
  removeWithoutBid(index){
    this.eventswithoutbids.splice(index, 1);
  }



}
