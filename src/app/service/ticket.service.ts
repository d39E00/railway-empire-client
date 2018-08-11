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


  getTickets() {
    return this.http.get<Ticket[]>(this.URL_GET_TICKETS, {headers: this.authService.getHeader()});
  }

  getSeats(id) {
    return this.http.get<Seat>(this.URL_GET_SEATS + id, {headers: this.authService.getHeader()});
  }
}

