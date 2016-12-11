
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  registerForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      field1: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9.]{5,6}$'), Validators.required])],
      field2: ['', Validators.compose([Validators.pattern('^[a-zA-Z.]{2,30}$'), Validators.required])]
     
    });
  }

  onSubmit() {
     //get Data and go to next page
       
    }

}
