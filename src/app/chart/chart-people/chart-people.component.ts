import {Component, ElementRef, OnInit} from '@angular/core';
import {ChartService} from '../../service/chart.service';
import {randomColor} from 'randomColor';
import {Chart} from 'chart.js';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chart-people',
  templateUrl: './chart-people.component.html',
  styleUrls: ['./chart-people.component.css']
})
export class ChartPeopleComponent implements OnInit {

  ages: any = [];
  labels: any[] = [];
  values: any[] = [];
  colors: any[] = [];
  chart: any = [];


  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    this.chartService.getPeopleChart().subscribe(
      res => {
        this.ages = res;
        const cnt18 = this.ages.filter(x => x < 18).length;
        const cnt25 = this.ages.filter(x => x >= 18).filter(x => x <= 25).length;
        const cnt35 = this.ages.filter(x => x > 25).filter(x => x <= 45).length;
        const cnt45 = this.ages.filter(x => x > 45).filter(x => x <= 60).length;
        const cnt60 = this.ages.filter(x => x > 60).length;
        this.labels = ['< 18', '18 - 25', '25 - 45', ' 45 - 60', '>60'];
        this.values = [cnt18, cnt25, cnt35, cnt45, cnt60];
        for (let i = 0; i < this.labels.length; i++) {
          this.colors.push(randomColor());
        }
        this.chart = new Chart('canvas', {
          type: 'pie',
          data: {
            labels: this.labels,
            datasets: [{
              label: 'age',
              backgroundColor: this.colors,
              data: this.values,
            }]
          },
          options: {
            title: {
              display: true,
              text: 'AGGREGATION BY AGE',
              fontColor: 'orange',
              fontSize: 16
            }
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
