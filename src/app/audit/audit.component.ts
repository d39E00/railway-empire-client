import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  visibleTrain = false;
  visibleStation = false;
  visibleAudit = false;

  constructor() {
  }

  ngOnInit() {
  }

  deletedTrains() {
    this.visibleAudit = false;
    this.visibleStation = false;
    this.visibleTrain = true;
  }

  deletedStations() {
    this.visibleAudit = false;
    this.visibleTrain = false;
    this.visibleStation = true;
  }

  audit() {
    this.visibleAudit = true;
    this.visibleTrain = false;
    this.visibleStation = false;
  }
}
