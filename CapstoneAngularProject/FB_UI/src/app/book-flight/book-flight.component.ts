import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BookFlightService } from "./book-flight.service";
import { Flights } from '../shared/Flight';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage!: string;
  successMessage!: string;
  flights!: Flights[];
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  ngOnInit() {
    //Create the bookingForm FormGroup and get all the flight details
  }
  book() {
    // Code the method here
  }

function validateFlight(c: FormControl) {
  /* 
     Code the validator here
     Use flightError as the property
 */

}


