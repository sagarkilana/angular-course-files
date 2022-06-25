import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable} from 'rxjs';

@Injectable()
export class ViewDetailsService {
  constructor(private http: HttpClient) {}

  view() : Observable<FlightBooking[]> {
    //Consume the exposed URI's specified in QP 
  }

  delete(id:any) : Observable<any> {
    //Consume the exposed URI's specified in QP
  }

}
