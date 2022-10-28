import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  template: `
  <h1>Angular rules ! </h1>
  `
})
export class AppComponent  {

  constructor(
    private logService : LogService,
    private renderer: Renderer2,
    private host: ElementRef
    ) {}

  ngOnInit() {
    this.logService.logMessage('Welcome Master !')
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red')
  }

}
