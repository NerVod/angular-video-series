import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  firstnameInput = '';
  lastnameInput = '';

  validationForm = new FormGroup({
    firstname: new FormControl(this.firstnameInput, [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastname: new FormControl(this.lastnameInput, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)
    ])
  })

  get firstname() {
    return this.validationForm.get('firstname');
  }
  get lastname() {
    return this.validationForm.get('lastname');
  }


  onSubmit() {

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
