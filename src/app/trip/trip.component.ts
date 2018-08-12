import {Component, OnInit} from '@angular/core';
import {TicketService} from '../service/ticket.service';
import {Ticket} from '../models/ticket';
import swal from 'sweetalert2';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private ticketService: TicketService) {
  }

  tickets: Ticket[] = [];

  ngOnInit() {
    this.ticketService.getTickets().subscribe(res => {
      console.log(res);
      this.tickets = res;
    }, error => {
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
  }
}
