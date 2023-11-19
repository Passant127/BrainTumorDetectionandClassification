import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistics-for-admin',
  templateUrl: './statistics-for-admin.component.html',
  styleUrls: ['./statistics-for-admin.component.css']
})
export class StatisticsForAdminComponent {

  constructor(private _ApiService: ApiService, private _Router: Router) {}
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];
  data1:any;
  Alldata:any;
  lineChart: any;
  line:any;
  chartsdisplay:boolean = false;
  homedisplay:boolean = false;
  tabledisplay:boolean = false;
  lable:string[] = ['Average_Records_PerDay', 'gliomaRecords','melingiomaRecords', 'pituitaryRecords' , 'tumorousRecords', 'notTumorousRecords' , 'totalPredictions'];
  


  logout(){
    localStorage.removeItem('userTaken');
    this._ApiService.currentuser.next(null)
    this._Router.navigate(['/home'])

  }
  charts_Ds(){
    this.chartsdisplay = true;  
  }
  ngOnInit():void{
    this._ApiService.getAdminInfo().subscribe({ 
      next:(data) => {
      this.data1 = data;
      console.log(this.data1.data)
      this.Alldata ={
        averageRecordsPerDay:this.data1.data.averageRecordsPerDay,
        gliomaRecords:this.data1.data.gliomaRecords,
        melingiomaRecords:this.data1.data.melingiomaRecords,
        pituitaryRecords:this.data1.data.pituitaryRecords,
        tumorousRecords:this.data1.data.timorousRecords,
        notTumorousRecords:this.data1.data.notTimorousRecords,
        totalPredictions:this.data1.data.totalPredictions,
        docotrsPredictions:this.data1.data. docotrsPredictions
      }
        console.log(this.Alldata)
      this.chartInfo = this.Alldata;

      this.lineChart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels:this.lable ,
          datasets: [{
            label: 'Statistics',
            data: [this.Alldata.averageRecordsPerDay,this.Alldata.gliomaRecords, this.Alldata.melingiomaRecords , this.Alldata.pituitaryRecords, this.Alldata.tumorousRecords, this.Alldata.notTumorousRecords ,this.Alldata.totalPredictions ],
            borderColor: '',
            fill: false
          }]
        },
        options: {
          aspectRatio:1.2
        }
      
    })

    
  
      this.chart = new Chart("MyChart", {
        type: 'bar', //this denotes tha type of chart
  
        data: {
          labels:this.lable, 
           datasets: [
            {
              label: "Statistics",
              data:  [this.Alldata.averageRecordsPerDay,this.Alldata.gliomaRecords, this.Alldata.melingiomaRecords , this.Alldata.pituitaryRecords, this.Alldata.tumorousRecords, this.Alldata.notTumorousRecords ,this.Alldata.totalPredictions ],
              backgroundColor: 'blue'
            },
      
          ]
        },
        options: {
          aspectRatio:1.2
        }
        
      })
      
      this.chart = new Chart("pie", {
        type: 'pie', //this denotes tha type of chart
  
        data: {
          labels:this.lable, 
           datasets: [
            {
              label: "Statistics",
              data:  [this.Alldata.averageRecordsPerDay,this.Alldata.gliomaRecords, this.Alldata.melingiomaRecords , this.Alldata.pituitaryRecords, this.Alldata.tumorousRecords, this.Alldata.notTumorousRecords ,this.Alldata.totalPredictions ],
              backgroundColor: ''
            },
      
          ]
        },
        options: {
          aspectRatio:1.5
        }
        
      })
      this.chart = new Chart("radar", {
        type: 'radar', //this denotes tha type of chart
  
        data: {
          labels:this.lable, 
           datasets: [
            {
              label: "Statistics",
              data:  [this.Alldata.averageRecordsPerDay,this.Alldata.gliomaRecords, this.Alldata.melingiomaRecords , this.Alldata.pituitaryRecords, this.Alldata.tumorousRecords, this.Alldata.notTumorousRecords ,this.Alldata.totalPredictions ],
              backgroundColor: ''
            },
      
          ]
        },
        options: {
          aspectRatio:1.5
        }
        
      })


 
  }
  }
  
    


  
    );
  }


}


