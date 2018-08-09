import {Component, OnInit} from '@angular/core';
import {AuditService} from '../../service/audit.service';
import {Audit} from '../../models/audit';
import swal from 'sweetalert2';

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
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }

  auditInfo(i) {
    swal({
      title: 'AUDIT HISTORY',
      html:
      '<input id=\'swal-input1\' class=\'swal2-input\' value=\'' + this.audits[i].userFirstName + ' ' + this.audits[i].userLastName + '\' disabled>' +
      '<input id=\'swal-input2\' class=\'swal2-input\' value=\'' + this.audits[i].userLogin + '\' disabled>' +
      '<input id=\'swal-input3\' class=\'swal2-input\' value=\'' + (this.audits[i].oldValue == null ? '-' : this.audits[i].oldValue) + '\' disabled>' +
      '<textarea id=\'swal-input3\' class=\'swal2-input\' disabled style=\'height: 100px\'>' + this.audits[i].newValue + '</textarea>',
      type: 'info'
    });
  }
}
