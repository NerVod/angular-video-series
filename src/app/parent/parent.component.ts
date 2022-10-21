import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  counter: number = 0

  constructor() { }

  ngOnInit(): void {


  }

displayAlert(msg:string) {
  this.counter ++;
  console.log(`${msg} compté ${this.counter} fois dans le parent`)
}

}
