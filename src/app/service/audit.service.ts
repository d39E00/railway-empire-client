import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Audit} from '../models/audit';

@Injectable()
export class AuditService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  URL_GET_ALL_AUDITS = 'http://localhost:8000/audit';

  getAll() {
    return this.httpClient.get<Audit[]>(this.URL_GET_ALL_AUDITS, {headers: this.authService.getHeader()});
  }
}
