import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uimodel',
  templateUrl: './uimodel.component.html',
  styleUrls: ['./uimodel.component.css'],
})
export class UIModelComponent {
  imagesrc: string = ' ';
  tumerous: string = ' ';
  nameofile: string = '';
  classificationType: string = ' ';
  constructor(private _ApiService: ApiService, private _Router: Router) {}
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file: any = null; // Variable to store file
  filefull: boolean = false;
  filentred:boolean = false

  // Inject service
  ngOnInit(): void {}

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
    this.filefull = true;
    this.nameofile = this.file.name
    this.filentred = true
  }
  reload(){
   window.location.reload();

  }

  // OnClick of button Upload
  onUpload() {
    this.loading = true;
    console.log(this.file);
    this._ApiService.upload(this.file).subscribe({
      next: (data) => {
        console.log('data', data);
        if (data.message === 'success') {
          this.filentred = false
          this.imagesrc = data.data.image;
          this.tumerous = data.data.timorous;
          this.classificationType = data.data.classificationType;
          this.loading = this.loading;  
        }
      },
      error: (err) => console.log(err),
    });
  }
  profile(){
    this._Router.navigate(['/ProfileHistory'])
  }
  logout(){
    localStorage.removeItem('userTaken');
    this._ApiService.currentuser.next(null)
    this._Router.navigate(['/home'])

  }

}
