import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../shared/interface';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {
   @ViewChild('updatedname') updatedname! : ElementRef;
   @Output() deletobj: EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>();
   @Input() passengercard!:Ipassenger
   isEditable: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  onedit(){
    this.isEditable= true;
  }
  // ondelet(){
  //   this.deletobj.emit(this.passengercard)
  // }
  onupdate(){
    this.isEditable=false;
    console.log(this.updatedname.nativeElement.value);
    this. passengercard.fullname = this.updatedname.nativeElement.value
    
  }
  ondelate(){
    this.deletobj.emit(this.passengercard)
  }
  // this.sendDeleteObj.emit(this.passengerCard)
  // onEdit(){

  
  //   this.isEditable= true;
  // }
  // onUpdate(){
  //   this.isEditable=false;
  //   console.log(this.updatedname.nativeElement.value);
  //   this.passengercard.fullname = this.updatedname.nativeElement.value;
  // }
    

 

}
