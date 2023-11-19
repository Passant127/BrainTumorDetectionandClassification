import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://localhost:7128/api/Auth';
  baseUrl2 = 'https://localhost:7128/api/BrainTumorDetectionAndClassification';
  currentuser = new BehaviorSubject(null);
  mail: any;

  constructor(private _HttpClient: HttpClient) {
    //to prevent when we make refresh not appear register and login
    if (localStorage.getItem('userTaken') != null) {
      this.saveCurrentUser();
    }
  }

  saveCurrentUser() {
    let encoded = JSON.stringify(localStorage.getItem('userTaken'));
    let decoded: any = jwtDecode(encoded);
    console.log(decoded);
    this.currentuser.next(decoded); 
  }
  signup(data: object): Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}/Register`, data);
  }
  login(data: object): Observable<any> {
  
    return this._HttpClient.post(`${this.baseUrl}/Login`, data);
  }
  sendOTP(data: object) {
    return this._HttpClient.post(`${this.baseUrl}/SendOTP`, data);
  }
  resetPassword(data: object) {
    console.log(data);

    return this._HttpClient.post(`${this.baseUrl}/ResetPassword`, data);
  }

  idVerify(data: any): Observable<any> {
    console.log(data);
    const formData = new FormData();

    return this._HttpClient.post('https://api.ocr.space/parse/image', data);
  }

  getHistory() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('userTaken')}`,
      }),
    };
    return this._HttpClient.get(`${this.baseUrl2}/Get`, httpOptions);
  }
  getAdminInfo() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('userTaken')}`,
      }),
    };
    return this._HttpClient.get(`${this.baseUrl2}/GetStatistics`, httpOptions);
  }

  // Returns an observable
  upload(file: File): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('userTaken')}`,
      }),
    };

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('ImageFile', file);
    console.log(formData);

    // Make http post request over api
    // with formData as req
    return this._HttpClient.post(
      `${this.baseUrl2}/Create`,
      formData,
      httpOptions
    );
  }
}
