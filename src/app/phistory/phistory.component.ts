import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-phistory',
  templateUrl: './phistory.component.html',
  styleUrls: ['./phistory.component.css']
})
export class PhistoryComponent {

  id:number = 0;
  new:any;
  image:string="";
  tumerous:string="";
  classification:string="";
  constructor(private _ApiService: ApiService, private _Router: Router) {}
  phistory(){

    this._ApiService.getHistory().subscribe({
      next: (data) => {
       this.new = data

        if (this.new.data.message === 'success') {

          // this._Router.navigate(["/Results"]);
        }
      },
      error: (err) => console.log(err),
    });

  }
  back(){
    this._Router.navigate(['/Model'])
  }


}
