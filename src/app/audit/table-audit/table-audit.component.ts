import {Component, OnInit} from '@angular/core';
import {AuditService} from '../../service/audit.service';

@Component({
  selector: 'app-table-audit',
  templateUrl: './table-audit.component.html',
  styleUrls: ['./table-audit.component.css']
})
export class TableAuditComponent implements OnInit {

  audits = [];

  constructor(private auditService: AuditService) {
  }

  ngOnInit() {
    this.audits = this.auditService.getAll();
  }

  auditInfo(i) {
    alert(JSON.stringify(this.audits[i]));
  }
}
