import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginPage: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.loginPage = this.formBuilder.group({
    username : ['', Validators.required],
    password : ['', [Validators.required, Validators.email]]
  });
  }
 

  clicksub() {
    this.submitted = true;
    console.log(this.loginPage.value);
  }
  get f() { return this.loginPage.controls; }





}