import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css'],
})
export class OCRComponent {
  constructor(private _ApiService: ApiService, private _Router: Router) {}
  file: any = null; // Variable to store file
  filefull: boolean = false;
  Pk: string = 'K85838142788957';
  language: string = 'ara';
  allData: any = null;
  loading: boolean = false; // Flag variable
  message: number = 0;
  flag: boolean = false;
  filename:string = '';
  filentred:boolean = false;
  out: string = '';
  onChange(event: any) {
    this.file = event.target.files[0];
    this.filefull = true;
    this.filename = this.file.name;
    this.filentred = true
  }

  // Create form data

  onUpload() {
    this.loading = !this.loading;
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('apikey', this.Pk);
    formData.append('file', this.file);
    formData.append('language', this.language);

    this._ApiService.idVerify(formData).subscribe({
      next: (data) => {
        console.log('data', data);
        this.message = data.ParsedResults[0].ParsedText.search('طبيب');
     

        if (this.message > -1) {
          alert("Hello Doctor");
          this.loading = this.loading;
          this._Router.navigate(['/register']);
        } else {
          this.loading = this.loading;
          this.flag = true;
          if(confirm("Sorry you couldn't enter it's only for doctors") == true){
            this._Router.navigate(['/home']);

          }

        }
      },
      error: (err) => console.log(err),
    });
  }
}
