import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

isSpecial = true ;

currentClasses = {};

currentStyles= {}

name = 'your name'

  constructor() { }

  ngOnInit(): void {
    this.setCurrentClasses()
    this.setCurrentStyle()
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: true,
      modified: true,
      special: false,
      superclasse: true
    }
  }

setCurrentStyle() {
  this.currentStyles = {
    'font-style' : 'Italic',
    'font-weight': "900",
    'color': 'blue'

  }
}
 

}
