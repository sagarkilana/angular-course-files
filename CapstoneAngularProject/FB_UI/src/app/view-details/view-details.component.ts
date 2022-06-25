import { Component, OnInit } from '@angular/core';
import { ViewDetailsService } from "./view-details.service";
import { FlightBooking } from '../shared/FlightBooking';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ViewDetailsService]
})
export class ViewDetailsComponent implements OnInit {
  flightDetails!: FlightBooking[];
  successMessage!: string;
  errorMessage!: string;
  constructor(private viewService: ViewDetailsService) { }

  ngOnInit() {
    this.view();
  }

  view() {

  }

  delete(id: any) {

  }
}
