import {Component, OnInit} from '@angular/core';
import {AuditService} from '../../service/audit.service';
import {Audit} from '../../models/audit';

@Component({
  selector: 'app-table-audit',
  templateUrl: './table-audit.component.html',
  styleUrls: ['./table-audit.component.css']
})
export class TableAuditComponent implements OnInit {

  audits: Audit[] = [];

  constructor(private auditService: AuditService) {
  }

  ngOnInit() {
    this.auditService.getAll().subscribe(
      res => {
        this.audits = res;
      },
      error1 => alert(JSON.stringify(error1)));
  }

  auditInfo(i) {
    alert(JSON.stringify(this.audits[i]));
  }
}
