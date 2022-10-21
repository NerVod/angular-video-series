import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  message = "message from Child"

  fonctionDuChild= () => {
    console.log("log de la fonction du child")
  }

  
  constructor() { }

  ngOnInit(): void {
  }



}
