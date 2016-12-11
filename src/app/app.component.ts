
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit {

  registerForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      bookingcode: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9.]{5,6}$'), Validators.required])],
      familyname: ['', Validators.compose([Validators.pattern('^[a-zA-Z.]{2,30}$'), Validators.required])]
     
    });
  }

  onSubmit() {
     //todo e2e test, show invalid then make a simple page that has a bookingcode.
     //if the bookingcode from bookingcode is in the bookingcode json, go to component.
       
    }

}
