import {Component, OnChanges, OnInit} from '@angular/core';
import {ChartService} from '../../service/chart.service';
import {randomColor} from 'randomColor';
import {Chart} from 'chart.js';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chart-stations',
  templateUrl: './chart-stations.component.html',
  styleUrls: ['./chart-stations.component.css']
})
export class ChartStationsComponent implements OnInit {

  result: any;
  labels: any[] = [];
  values: any[] = [];
  colors: any[] = [];
  chart: any = [];
  dateTo = '2018-08-25';
  dateFrom = '2018-08-08';


  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    this.build();
  }

  build() {
    this.chartService.getPopularStations(this.dateFrom, this.dateTo).subscribe(
      res => {
        this.result = res;
        this.labels = this.result.labels;
        this.values = this.result.values;
        for (let i = 0; i < this.labels.length; i++) {
          this.colors.push(randomColor());
        }
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'station',
                backgroundColor: this.colors,
                data: this.values
              }
            ]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: 'POPULAR STATIONS from ' + this.dateFrom + ' to ' + this.dateTo,
              fontColor: 'orange',
              fontSize: 16
            },

            responsive: true,
            maintainAspectRatio: false
          }

        });
      },
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
