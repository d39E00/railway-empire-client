import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import swal from 'sweetalert2';
import {SeatEntity} from '../../models/seat.entity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-seats',
  templateUrl: './content-seats.component.html',
  styleUrls: ['./content-seats.component.css']
})
export class ContentSeatsComponent implements OnInit {

  @Input() ID: number;
  @Input() NEXT: number;
  @Input() FLAG: boolean;
  maxCntCarriage = 5;
  currentCarriage = 1;
  bookedSeat: SeatEntity[] = [];
  booking: boolean[] = [];
  selecting: boolean[] = [];
  nonSelecting: boolean[] = [];
  currentSeat = 0;
  PREV = this.ID;

  constructor(private ticketService: TicketService, private router: Router) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 10; j++) {
        this.booking.push(false);
        this.nonSelecting.push(true);
        this.selecting.push(false);
      }
    }
  }

  ngOnInit(): void {
    this.clear();
    this.updateRequest();
  }

  toggle(index) {
    if (this.nonSelecting[index]) {
      this.clearSelecting();
      this.nonSelecting[index] = false;
      this.selecting[index] = true;
      this.currentSeat = index;
    } else if (this.selecting[index]) {
      this.nonSelecting[index] = true;
      this.selecting[index] = false;
      this.currentSeat = 0;
    } else {
      swal({title: 'Opps..', text: 'This seat booked, chose another', type: 'warning'});
    }
  }

  clearSelecting() {
    for (let i = 0; i < this.selecting.length; i++) {
      if (this.selecting[i] === true) {
        this.selecting[i] = false;
        this.nonSelecting[i] = true;
      }
    }
  }

  left() {
    if (this.currentCarriage > 1) {
      this.currentCarriage--;
      this.updateRequest();
    }
  }

  right() {
    if (this.currentCarriage < this.maxCntCarriage) {
      this.currentCarriage++;
      this.updateRequest();
    }
  }

  updateRequest() {
    this.ticketService.getSeats(this.ID).subscribe(res => {
      this.clear();
      this.maxCntCarriage = res.cntCarriages;
      this.bookedSeat = res.bookingSeats;
      this.update();
    });
  }

  clear() {
    for (let i = 0; i < 30; i++) {
      this.booking[i] = false;
      this.nonSelecting[i] = true;
    }
  }


  update() {
    for (let i = 0; i < this.bookedSeat.length; i++) {
      if (this.bookedSeat[i].carriage === this.currentCarriage) {
        this.booking[this.bookedSeat[i].seat] = true;
      }
    }
  }

  bookingTicket() {
    if (this.currentSeat !== 0) {
      const seat = new SeatEntity();
      seat.carriage = this.currentCarriage;
      seat.seat = this.currentSeat;
      this.ticketService.bookTicket(seat, this.ID).subscribe(res => {
        swal({
          title: 'Congratulations!', text: 'You book ticket', type: 'success'
        });
        this.booking[seat.seat] = true;
        this.updateRequest();
        if (this.FLAG) {
          if (this.ID !== this.NEXT) {
            this.ID = this.NEXT;
            this.ngOnInit();
          } else {
            swal({
              title: 'Congratulations!', text: 'You book all tickets', type: 'success'
            });
            this.router.navigateByUrl('/home');
          }
        }
      }, error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
    } else {
      swal({
        title: 'Oops..', text: 'You didn\'t choose seat!', type: 'warning'
      });
    }
  }

  next() {
    this.PREV = this.ID;
    this.ID = this.NEXT;
    this.ngOnInit();
  }

  prev() {
    this.NEXT = this.ID;
    this.ID = this.PREV;
    this.ngOnInit();
  }
}
