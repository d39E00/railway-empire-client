import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Ticket} from '../models/ticket';
import {Seat} from '../models/seat';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  URL_GET_TICKETS = 'http://localhost:8000/userMap/show';
  URL_GET_SEATS = 'http://localhost:8000/schedule/seat/';
  URL_BOOK_TICKET = 'http://localhost:8000/schedule/ticket';
  URL_GET_BY_ID_TICKET = 'http://localhost:8000/schedule/ticket/all/';


  getTickets() {
    return this.http.get<Ticket[]>(this.URL_GET_TICKETS, {headers: this.authService.getHeader()});
  }

  getSeats(id) {
    return this.http.get<Seat>(this.URL_GET_SEATS + id, {headers: this.authService.getHeader()});
  }

  bookTicket(seat, ID) {
    const scheduleDTO = {
      schedule: ID,
      seatDTO: seat
    };
    return this.http.put(this.URL_BOOK_TICKET, scheduleDTO, {headers: this.authService.getHeaderPost()});
  }

  getTicketById(id) {
    return this.http.get<Ticket[]>(this.URL_GET_BY_ID_TICKET + id, {headers: this.authService.getHeader()});
  }
}

