import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Ticket} from '../models/ticket';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  URL_GET_TICKETS = 'http://localhost:8000/userMap/show';

  getTickets() {
    return this.http.get<Ticket[]>(this.URL_GET_TICKETS, {headers: this.authService.getHeader()});
  }
}
