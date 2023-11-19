import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  data1:any;
  role:any;
  // this is group of from contain each control i made in Html
  // How to know that is my in html ? we use binding then now go to html
  constructor(private _ApiService: ApiService, private _Router: Router) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(
      null
      , 
      Validators.required,
 
    ),
    userName: new FormControl(null
      , [
        Validators.required,
      ]
      ),
    Gender: new FormControl(null , Validators.required),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]
      ),
    password: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(6)
        
      ]
      ),
    idintityCardNumber: new FormControl(null,
      [
        Validators.required,
        Validators.maxLength(14),
        Validators.minLength(14)
      ]
      ),
    dateOfBirthDay: new FormControl(null,Validators.required),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(02)?(01)[0-25][0-9]{8}$/),
    ]),
  });
  err: string = '';
  onsubmit(formData: FormGroup) {
    this.data1={
      name: formData.value.name,
      userName: formData.value.userName,
      Gender: formData.value.Gender,
      email:formData.value.email,
      password: formData.value.password,
      idintityCardNumber: formData.value.idintityCardNumber,
      dateOfBirthDay:formData.value.dateOfBirthDay,
      phoneNumber: formData.value.phoneNumber,
      role: "Doctor"
   
    }
    console.log(this.err)
 
    

    this._ApiService.signup(this.data1).subscribe({
      next: (data) => {
        console.log(data);
        this.err = data.error;
        if (data.message === 'success') {
          console.log(data)
          //to login
          this._Router.navigate(['/login']);
        }
      },
      error: (err) => (this.err = err.error.message),

    });
  }

  login(){
    this._Router.navigate(['/login'])
  }
}
