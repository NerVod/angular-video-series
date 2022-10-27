import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

isSpecial = true ;

currentClasses = {};


  constructor() { }

  ngOnInit(): void {
    this.setCurrentClasses()
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: true,
      modified: true,
      special: false,
      superclasse: true
    }
  }


 

}
