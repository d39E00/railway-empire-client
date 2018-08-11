import {Component, OnInit} from '@angular/core';
import {TicketService} from '../service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
  }

}
