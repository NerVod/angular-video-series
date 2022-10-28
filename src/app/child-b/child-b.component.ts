import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {

  constructor() { }

species = ['fish', 'cat', 'dog'];
model = new Pet(1, 'Goldie', this.species[0]);
submited = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.submited = true
  }

}
