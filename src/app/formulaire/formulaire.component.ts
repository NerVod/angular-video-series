import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
  })

  onSubmit() {
    console.warn(this.profileForm.value)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
