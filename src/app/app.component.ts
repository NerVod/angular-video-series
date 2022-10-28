import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  template: `
  <h1>Angular router App</h1>

  <nav>
      <ul>
        <li><a routerLink="first-component/1">First Component</a></li>
        <li><a routerLink="second-component/{{deuxieme}}">Second Component</a></li>
      </ul>
  </nav>
  <router-outlet></router-outlet>

  `
})
export class AppComponent  {

  deuxieme:string = 'deuz'


  constructor(
    
    ) {}

  ngOnInit() {
    
  }

}
