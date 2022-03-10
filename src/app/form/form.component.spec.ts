import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {FormComponent} from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        FormComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Test a Form Group ELEMENT COUNT', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('check initial form values for login form group', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      username: '',
      password: ''
    };
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it('CHECK USERNAME VALUE AFTER ENTERING SOME VALUE AND VALIDATION', () => {
    // tslint:disable-next-line:max-line-length
    const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    loginFormUserElement.value = 'sample@gmail.com';
    loginFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const userNameValueFormGroup = component.loginForm.get('username');
      expect(loginFormUserElement.value).toEqual(userNameValueFormGroup.value);
      expect(userNameValueFormGroup.errors).toBeNull();
    });
  });

  it('CHECK LOGIN FORM IS VALID WHEN VALIDATORS ARE FULFILLED', () => {
    // tslint:disable-next-line:max-line-length
    const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[0];
    const loginFormPasswordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loginForm').querySelectorAll('input')[1];
    loginFormUserElement.value = 'otto.auravuo@gmail.com';
    loginFormPasswordElement.value = 'salasana123';
    loginFormUserElement.dispatchEvent(new Event('input'));
    loginFormUserElement.dispatchEvent(new Event('input'));
    const isLoginFormValid = component.loginForm.valid;
    fixture.whenStable().then(() => {
      expect(isLoginFormValid).toBeTruthy();
    });
  });

});
