import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _ApiService: ApiService, private _Router: Router) {}

  // storage = localStorage.getItem('userTaken')
  login_Logout: boolean = false;
  //  loginornot(){
  //   if(this.storage != null){
  //     this.login_Logout = true

  //   }
  //   else{
  //     this.login_Logout = false
  //   }
  //  }
  logout() {
    // this.login_Logout = true
    localStorage.removeItem('userTaken');
    this._ApiService.currentuser.next(null);
  }

  results = [
    { src: '../../assets/Doctor.jpg', title: 'Doctors Access' },
    { src: '../../assets/Admin-Access.jpeg', title: 'Goverment Access' },

  ];

  login() {
    this._Router.navigate(['/login']);
  }
  ocr() {
    this._Router.navigate(['/IDCard']);
  }
  navigatetoModel(){
    this._Router.navigate(['/Model'])
  }
  navigatetoProfile(){
    this._Router.navigate(['/ProfileHistory'])
  }
  ngOnInit(): void {
    this._ApiService.currentuser.subscribe({
      next: () => {
        if (this._ApiService.currentuser.getValue() != null)
          this.login_Logout = true;
        else {
          this.login_Logout = false;
        }
      },
    });
  }
}
