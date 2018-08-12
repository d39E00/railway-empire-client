import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit, OnDestroy {

  constructor(private routes: ActivatedRoute) {
  }

  private sub: any;
  ID: number;
  ID_NEXT: number;
  ID_PREV: number;
  transfer = false;

  ngOnInit(): void {
    this.sub = this.routes.params.subscribe(params => {
      const type = params['type'];
      if (type === 'direct') {
        this.ID = +params['id'];
      } else {
        this.ID = +params['id_Departure'];
        this.ID_NEXT = +params['id_Arrival'];
        this.ID_PREV = this.ID;
        this.transfer = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
