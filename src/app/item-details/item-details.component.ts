import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  // templateUrl: './item-details.component.html',
  template: `
    <button (click)="delete()">delete</button>
  `,
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Output() deleteRequest = new EventEmitter<string>(); 

  dataToDelete: string= "données du User effacées"

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.dataToDelete)
  }

}
