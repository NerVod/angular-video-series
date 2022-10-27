import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `
  // <input #ref1 type="text" [(ngModel)]= "firstExample" />
  // <span *ngIf="true">{{ref1.value}}</span>

  // `
})
export class AppComponent  {

  firstExample = '';

}
