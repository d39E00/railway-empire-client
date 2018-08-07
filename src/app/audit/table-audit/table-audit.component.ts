import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-audit',
  templateUrl: './table-audit.component.html',
  styleUrls: ['./table-audit.component.css']
})
export class TableAuditComponent implements OnInit {

  audits = [];

  constructor() {
  }

  ngOnInit() {
    const audit = {date: '22.03.1234', userLogin: 'elinas', operations: 'deleted', newValue: 'new'};
    const audit2 = {date: '22.03.1234', userLogin: 'elinas', operations: 'deleted', newValue: 'new'};
    this.audits.push(audit);
    this.audits.push(audit2);
  }

}
