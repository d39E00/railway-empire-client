import {Component, OnInit} from '@angular/core';
import {ChartService} from '../../service/chart.service';
import {randomColor} from 'randomColor';
import {Chart} from 'chart.js';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chart-tickets',
  templateUrl: './chart-tickets.component.html',
  styleUrls: ['./chart-tickets.component.css']
})
export class ChartTicketsComponent implements OnInit {

  result: any;
  labels: any[] = [];
  values: any[] = [];
  colors: any[] = [];
  chart: any = [];

  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    this.chartService.getTicketsCnt().subscribe(
      res => {
        this.result = res;
        this.labels = this.result.labels;
        this.values = this.result.values;
        for (let i = 0; i < this.labels.length; i++) {
          this.colors.push(randomColor());
        }
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'ticket cnt',
                backgroundColor: this.colors,
                data: this.values
              }
            ]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: 'BOOKING TICKETS COUNT for TODAY',
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
