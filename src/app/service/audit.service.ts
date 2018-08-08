import { Injectable } from '@angular/core';

@Injectable()
export class AuditService {

  audits = [];

  constructor() { }

  getAll() {
    /*
    /audit
    */

    let audit = { date: '22.03.1234', userLogin: 'elinas', operations: 'deleted', newValue: 'new' };
    this.audits.push(audit);
    return this.audits;
  }

}