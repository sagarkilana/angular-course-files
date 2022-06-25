import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Flights } from '../shared/Flight';

@Injectable()
export class BookFlightService {
  flightDetail!: any;
  error!: any;
  errorMessage!: String;
  constructor(private http: HttpClient) { }

  bookFlight(data: any): Observable<any> {
    //Consume the exposed URI's specified in QP 
  }

  getAllFlights(): Observable<Flights[]> {
    //Consume the exposed URI's specified in QP 
  }

  updateFlight(flightId: any, data: any): Observable<any> {
    //Consume the exposed URI's specified in QP 
  }
}
