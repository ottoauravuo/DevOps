import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  profileForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')])],
    lastName: ['', Validators.compose([Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')])],
    personID: ['', Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    username: ['', Validators.minLength(6)],
    // tslint:disable-next-line:max-line-length
    password: ['', Validators.compose([Validators.minLength(10), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]*')])],
    checked: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
