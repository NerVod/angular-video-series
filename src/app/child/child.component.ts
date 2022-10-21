import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Output()AlertFromChild = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  AlerteAuClick() {
    this.AlertFromChild.emit('bouton clické dans le child')
  }


}
