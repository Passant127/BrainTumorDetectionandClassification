import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  islogin:boolean = false;
  // this is group of from contain each control i made in Html
  // How to know that is my in html ? we use binding then now go to html
  constructor(private _ApiService :ApiService, private _Router:Router ) {}
  loginForm: FormGroup = new FormGroup({
  
    email: new FormControl(null,Validators.required),
    password: new FormControl(null , Validators.required),
   
  });
  errormsg:string =''
  submitlogin(formData: FormGroup) {
   
    this._ApiService.login(formData.value).subscribe({
      next:(data)=>{
        console.log(data);
        this.errormsg = data.error;
        console.log(data.data.role[0])

        if(data.message === 'success'){
    
            // make localStorage for taken (email and password)
           
            localStorage.setItem("userTaken",data.data.token)
            this._ApiService.saveCurrentUser();
            if(data.data.role[0]=='Doctor'){
              this._Router.navigate(["/Model"]);

            }
            else if(data.data.role[0]=='Admin'){
              this._Router.navigate(["/Admin"]);
            }

        
        }
      } ,
      error:(err)=> this.errormsg = err.data.error
    
 
    }
    
    )
  

  }
 
  register(){
    this._Router.navigate(["/IDCard"])

  }
  otpnavigate(){
    this._Router.navigate(["/ForgetPassword"])

  }

 

}
