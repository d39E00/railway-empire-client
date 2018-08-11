import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import swal from 'sweetalert2';
import {SeatEntity} from '../../models/seat.entity';

@Component({
  selector: 'app-content-seats',
  templateUrl: './content-seats.component.html',
  styleUrls: ['./content-seats.component.css']
})
export class ContentSeatsComponent implements OnInit {

  constructor(private ticketService: TicketService) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 10; j++) {
        this.booking.push(false);
        this.nonSelecting.push(true);
        this.selecting.push(false);
      }
    }
  }

  ID = 50;
  maxCntCarriage = 5;
  currentCarriage = 1;
  bookedSeat: SeatEntity[] = [];
  booking: boolean[] = [false];
  selecting: boolean[] = [false];
  nonSelecting: boolean[] = [true];
  currentSeat = 0;


  ngOnInit(): void {
    this.ticketService.getSeats(this.ID).subscribe(res => {
      this.maxCntCarriage = res.cntCarriages;
      this.bookedSeat = res.bookingSeats;
      this.update();
    });
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
      this.update();
    }
  }

  right() {
    if (this.currentCarriage < this.maxCntCarriage) {
      this.currentCarriage++;
      this.update();
    }
  }

  update() {
    for (let i = 0; i < this.bookedSeat.length; i++) {
      if (this.bookedSeat[i].carriage === this.currentCarriage) {
        this.booking[i] = true;
      } else {
        this.booking[i] = false;
      }
    }
  }

  bookingTicket() {
    alert(this.currentSeat + ' ' + this.currentCarriage);
    if (this.currentSeat !== 0) {
      const seat = new SeatEntity();
      seat.carriage = this.currentCarriage;
      seat.seat = this.currentSeat;
      this.ticketService.bookTicket(seat).subscribe(res => {
        swal({
          title: 'Congratulations!', text: 'You book ticket', type: 'success'
        });
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
}
