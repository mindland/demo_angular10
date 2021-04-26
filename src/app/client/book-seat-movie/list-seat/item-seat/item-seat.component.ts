import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-seat',
  templateUrl: './item-seat.component.html',
  styleUrls: ['./item-seat.component.scss'],
})
export class ItemSeatComponent implements OnInit {
  @Input() seat: any;
  @Output() eventSeat = new EventEmitter(); 

  statusSeatBooked = false;

  constructor() {}

  ngOnInit(): void {}

  seatBooked() {
    this.statusSeatBooked = ! this.statusSeatBooked;

    const objSeat = {
      ghe: this.seat,
      statusSeatBooked: this.statusSeatBooked
    }

    this.eventSeat.emit(objSeat);
  } 

}
