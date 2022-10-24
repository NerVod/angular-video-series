import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  // templateUrl: './parent.component.html',
  // styleUrls: ['./parent.component.scss']
  template: `
    <app-item-details (deleteRequest)="deleteItem($event)"></app-item-details>
  `
})
export class ParentComponent implements OnInit {

  deleteItem(item: any) {
    console.log(item)
  }

  constructor() { }

  ngOnInit(): void {
  }


 

}
