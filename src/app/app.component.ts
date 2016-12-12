
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder, Validators } from '@angular/forms';
import { Passenger, Flight, BookingService } from './services/booking.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BookingService]
 
})
export class AppComponent implements OnInit {
  passenger: Passenger;
  flight : Flight;
  registerForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder, private bookingService: BookingService ){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      bookingcode: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9.]{5,6}$'), Validators.required])],
      familyname: ['', Validators.compose([Validators.pattern('^[a-zA-Z.]{2,30}$'), Validators.required])]
     
    });
  }

  onSubmit() {
     this.bookingService.getBooking().subscribe((data) => {
       this.passenger =  new Passenger(data.passengers);
       this.flight = new Flight(data);
       console.log(this.passenger, this.flight)

     })    
    }

}
