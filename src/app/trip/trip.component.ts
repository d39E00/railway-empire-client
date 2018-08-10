import {Component, OnInit} from '@angular/core';
import {TicketService} from '../service/ticket.service';
import {Ticket} from '../models/ticket';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private ticketService: TicketService) {
  }

  tickets: Ticket = [];

  ngOnInit() {
    this.ticketService.getTickets().subscribe(res => {
      console.log(res);
      this.tickets = res;
    }, error1 => {
      console.log(error1);
      alert(JSON.stringify(error1));
    });
  }

  download(ticket) {
  }
}
