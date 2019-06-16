import { Component, OnInit, HostBinding  } from '@angular/core';
import {  trigger, state, style, animate, transition} from '@angular/animations';
import{DataService} from "../../data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllTournaments()
        .subscribe(data => {
          console.log(data)
            for (var i = 0; i < data.length; i++){
              this.dataService.averageReviews(data[i]._id).subscribe(data => {
                if(data){
                   console.log("averaged data")
                } else {
                  console.log("Something went wrong");
                }
              })
            }
            this.documents = data;

        });
  }
  refresh(): void {
    window.location.reload();
  }
  // onLinkClick(id){
  //   this.dataService.addCoordinates(id).subscribe(data => {
  //     if (data) {
  //       console.log("coordinates added")
  //       this.router.navigate(['/tournament/', id])
  //     } else {
  //       console.log("something went wrong")
  //     }
  //   })
  // }


}
