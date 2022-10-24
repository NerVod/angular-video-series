import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  // templateUrl: './parent.component.html',
  // styleUrls: ['./parent.component.scss']
  template: `
    <div [style]="{
      width: '200px',
      height: '200px',
      backgroundColor: 'pink'
    }">Is on Sale</div>

  `
})
export class ParentComponent implements OnInit {

  onSale = true
  pink = "pink"

  constructor() { }

  ngOnInit(): void {
  }


 

}
