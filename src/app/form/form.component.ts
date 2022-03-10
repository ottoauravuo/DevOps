import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ComponentFixture} from '@angular/core/testing';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{

  loginForm = this.fb.group({
    username: ['', Validators.minLength(6)],
    // tslint:disable-next-line:max-line-length
    password: ['', Validators.compose([Validators.minLength(10), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]*')])],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  // tslint:disable-next-line:typedef
  initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['']
    });
  }
}
