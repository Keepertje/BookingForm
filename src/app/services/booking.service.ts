import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookingService {

   constructor(private http: Http) {}
 
  getBooking() {
    return this.http.get('assets/mock/mock.json').map( (res: Response) =>  res.json());
  }
}

export class Passenger {
  id: string;
  firstName: string;
  lastName: string;
 
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.firstName = obj && obj.firstName || null;
    this.lastName = obj && obj.lastName || null;
  
  }
}
 
export class Flight {
  departureCity: string;
  arrivalCity :string;
  departureAirport: string;
  arrivalAirport :string;
  flightnumber: string;
  carrier: string;
  departureTime: string;
  arrivalTime:string;
 
  constructor(obj?: any) {
 
   let obj2 = obj && obj.itinerary.connections[0].segments[0] || null;
    this.departureCity = obj2 && obj2.departFrom.city.name || null;
    this.arrivalCity = obj2 && obj2.arriveOn.city.name || null;
      this.departureAirport = obj2 && obj2.departFrom.name || null;
    this.arrivalAirport = obj2 && obj2.arriveOn.name || null;
    this.flightnumber = obj2 && obj2.marketingFlight.number || null;
    this.carrier = obj2 && obj2.marketingFlight.carrier.name || null;
    this.departureTime = obj2 && obj2.marketingFlight.operatingFlight.localScheduledDeparture || null;
    this.arrivalTime = obj2 && obj2.marketingFlight.operatingFlight.localScheduledArrival || null;
  }


}