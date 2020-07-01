import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registrationForm:FormGroup;
  constructor( 
    public router:Router,
    public fb: FormBuilder){}
  
  ngOnInit():void {
    this.registrationForm = this.fb.group({ 
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required]     
    });
  }
  get firstname(){
    return this.registrationForm.get('firstname');
  }
   get lastname(){
    return this.registrationForm.get('lastname');
  }
  get username(){
    return this.registrationForm.get('username');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get dob(){
    return this.registrationForm.get('dob');
  }
  get country(){
    return this.registrationForm.get('country');
  }

  onSubmit(){
    console.log('Submitted Form : ' + JSON.stringify(this.registrationForm.value));
    this.router.navigate(['/suc']); 
  }

}
