import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../service/schedule.service';
import {Schedule} from '../../models/schedule';
import swal from 'sweetalert2';
import {TicketService} from '../../service/ticket.service';
import {Ticket} from '../../models/ticket';


@Component({
  selector: 'app-table-edit-item-schedule',
  templateUrl: './table-edit-item-schedule.component.html',
  styleUrls: ['./table-edit-item-schedule.component.css']
})
export class TableEditItemScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService, private ticketService: TicketService) {
  }

  schedules: Schedule[] = [];
  tickets: Ticket[] = [];

  ngOnInit() {
    this.scheduleService.getAll().subscribe(
      res => this.schedules = res,
      error1 => alert(JSON.stringify(error1)));
  }

  delete(id, i) {
    this.scheduleService.delete(id).subscribe(
      res => {
        this.schedules.splice(i, 1);
        swal({title: 'Congratulations!', text: 'You delete schedule!', type: 'success'});
        console.log(res);
      },
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }

  edit(schedule, i) {
    const cnt = this;
    swal({
      title: 'EDIT SCHEDULE',
      html:
      '<input id=\'swal-input1\' class=\'swal2-input\' value=\'' + schedule.trainName + '\'>' +
      '<input id=\'swal-input2\' class=\'swal2-input\' value=\'' + schedule.stationDepartureName + '\'>' +
      '<input id=\'swal-input3\' class=\'swal2-input\' value=\'' + schedule.stationArrivalName + '\'>' +
      '<input id=\'swal-input4\' class=\'swal2-input\' type="datetime-local" value=\'' + schedule.dateDeparture.replace(' ', 'T') + '\'>' +
      '<input id=\'swal-input5\' class=\'swal2-input\' type="datetime-local"  value=\'' + schedule.dateArrival.replace(' ', 'T') + '\'>',
      focusConfirm: false,
      confirmButtonText: 'EDIT',
    }).then(function () {
      const scheduleDTO = new Schedule();
      scheduleDTO.id = schedule.id;
      scheduleDTO.trainName = (document.getElementById('swal-input1') as HTMLInputElement).value;
      scheduleDTO.stationDepartureName = (document.getElementById('swal-input2') as HTMLInputElement).value;
      scheduleDTO.stationArrivalName = (document.getElementById('swal-input3') as HTMLInputElement).value;
      scheduleDTO.dateDeparture = (document.getElementById('swal-input4') as HTMLInputElement).value.replace('T', ' ') + ':00';
      scheduleDTO.dateArrival = (document.getElementById('swal-input5') as HTMLInputElement).value.replace('T', ' ');
      alert(JSON.stringify(scheduleDTO));
      cnt.scheduleService.edit(scheduleDTO).subscribe(
        res => {
          swal({title: 'Congratulations!', text: 'You edit schedule!', type: 'success'});
          console.log(res);
          cnt.schedules[i].trainName = scheduleDTO.trainName;
          cnt.schedules[i].stationDepartureName = scheduleDTO.stationDepartureName;
          cnt.schedules[i].stationArrivalName = scheduleDTO.stationArrivalName;
          cnt.schedules[i].dateDeparture = scheduleDTO.dateDeparture;
          cnt.schedules[i].dateArrival = scheduleDTO.dateArrival;
        },
        error => {
          alert(JSON.stringify(error));
          console.log(error);
          swal({
            title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
          });
        });
    }).catch(swal.noop);
  }

  info(id) {
    this.ticketService.getTicketById(id).subscribe(res => {
      let content = '';
      this.tickets = res;
      for (let i = 0; i < this.tickets.length; i++) {
        if (this.tickets[i].userBirthDay == null) {
          this.tickets[i].userBirthDay = '-';
        }
        if (this.tickets[i].userSex == null) {
          this.tickets[i].userSex = '-';
        }
        content = content + '<tr><th class=\'text-center\'>' + this.tickets[i].userFirstName +
          '</th><th class=\'text-center\'>' + this.tickets[i].userLastName +
          '</th><th class=\'text-center\'>' + this.tickets[i].userLogin +
          '</th><th>' + this.tickets[i].userBirthDay +
          '</th><th>' + this.tickets[i].userSex +
          '</th><th>' + this.tickets[i].seatCarriage +
          '</th><th>' + this.tickets[i].seatSeat + '</th></tr>';
      }
      if (this.tickets.length > 0) {
        swal({
          title: 'For this schedule bought ' + this.tickets.length + ' tickets',
          width: '800px',
          html:
          `<table class="table table-striped table-dark text-center">
        <thead class="font-weight-bold">
        <tr>
            <th class="text-center">First name</th>
            <th class="text-center">Last name</th>
            <th class="text-center">Login</th>
            <th>Birthday</th>
			<th>sex</th>
			<th>carriage</th>
			<th>seat</th>
        </tr>
        </thead>
        <tbody class="text-center text-warning" id="ticketTableId">` + content +
          `</tbody>
    </table>`
        });
      } else {
        swal({
          title: 'Empty..',
          text: 'For this schedule nobody bought tickets.',
          type: 'warning'
        });
      }
    }, error => {
      alert(JSON.stringify(error));
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
  }
}
