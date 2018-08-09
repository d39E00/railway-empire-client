import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class ChartService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  URL_CHART_PEOPLE = 'http://localhost:8000/chart/popularUsersAges';
  URL_CHART_PROFIT = 'http://localhost:8000/chart/profit/';
  URL_CHART_TICKETS = 'http://localhost:8000/chart/cntTickets';
  URL_CHART_STATIONS = 'http://localhost:8000/chart/popularStations/';


  getPeopleChart() {
    return this.httpClient.get(this.URL_CHART_PEOPLE, {headers: this.authService.getHeader()});
  }

  getProfitChart(dateFrom, dateTo) {
    return this.httpClient.get(this.URL_CHART_PROFIT + 'dateFrom/' + dateFrom + '/dateTo/' + dateTo,
      {headers: this.authService.getHeader()});
  }

  getTicketsCnt() {
    return this.httpClient.get(this.URL_CHART_TICKETS, {headers: this.authService.getHeader()});
  }

  getPopularStations(dateFrom, dateTo) {
    return this.httpClient.get(this.URL_CHART_STATIONS + 'dateFrom/' + dateFrom + '/dateTo/' + dateTo,
      {headers: this.authService.getHeader()});
  }
}
