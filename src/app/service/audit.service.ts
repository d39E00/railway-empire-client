import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuditService {

  constructor(private httpClient: HttpClient) {
  }

  URL_GET_ALL_AUDITS = 'http://localhost:8000/audit';

  getAll() {
    return this.httpClient.get(this.URL_GET_ALL_AUDITS);
  }
}
