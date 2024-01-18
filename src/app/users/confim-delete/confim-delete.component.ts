import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { User } from 'src/app/Modes/User';

@Component({
  selector: 'app-confim-delete',
  templateUrl: './confim-delete.component.html',
  styleUrls: ['./confim-delete.component.css']
})
export class ConfimDeleteComponent implements OnInit{



  constructor() { }

 @Input() userToDelete:User | undefined
@Output() onConfimation:EventEmitter<boolean> = new EventEmitter<boolean>


  ngOnInit() {
  }

  onBtnClick(value:boolean){
      this.onConfimation.emit(value);
  }
}
