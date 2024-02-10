import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../shared/interface';

@Component({
  selector: 'app-passengerlist',
  templateUrl: './passengerlist.component.html',
  styleUrls: ['./passengerlist.component.scss']
})
export class PassengerlistComponent implements OnInit,DoCheck {
@Input()passengerlist : Array<Ipassenger> = []
  count!: number;
  constructor() { }
  ngDoCheck(): void {
    this.count = this.passengerlist.reduce((acc,cv)=>{
      if(cv.checkedIn){
        acc++
      }
      return acc
 },0)

  }

  ngOnInit(): void {
  }

}
