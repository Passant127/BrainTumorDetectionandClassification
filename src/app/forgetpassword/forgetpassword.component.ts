import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent {
  constructor(private _ApiService: ApiService, private _Router: Router) {}
  _data_: any;
  forget: boolean = false;
  email: string = '';
  otp:string ="";
  email_:string ="";
  data1:any;
  newPasswoed:string ="";
  OTPForm: FormGroup = new FormGroup({
    email: new FormControl(null,Validators.required),

  });
  ResetForm: FormGroup= new FormGroup({
    email:new FormControl(null),
    otp:  new FormControl(null,Validators.required),
    newPassword: new FormControl(null,Validators.required)
  })
  errormsg1: string = '';
  sendmail(formData: FormGroup) {
    this._ApiService.sendOTP(formData.value).subscribe({
      next: (data) => {
        this._data_ = data;
        console.log(this._data_ = data)
        this.errormsg1 = this._data_.error

        if (this._data_.message === 'success') {
          this.forget = true;
          this.email = formData.value.email
     
         
        }
      },
      error: (err) => (this.errormsg1 = err.error.message),
    });
  }
  errormsg2: string = '';
    
  resetpass(formData:FormGroup){
    
    this.data1={
      otp: formData.value.otp,
      newPassword:formData.value.newPassword,
      email:this.email,
    }
 
    this._ApiService.resetPassword(this.data1).subscribe({
      next: (data) => {
        this._data_ = data;
        this.errormsg2 = this._data_.error
        console.log(this.errormsg2)

        if (this._data_.message === 'success') {
         console.log(this._data_)
            this._Router.navigate(["/login"]);
     
         
        }
      },
      error: (err) => (this.errormsg2 = err.error.message),
    });
  

  }
  back(){
    this._Router.navigate(['/login'])
  }

}
